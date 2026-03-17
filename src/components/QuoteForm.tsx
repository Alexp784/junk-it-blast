import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, X, CheckCircle } from "lucide-react";

const QuoteForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [contactMethod, setContactMethod] = useState("call");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files).filter(f => f.size <= 8 * 1024 * 1024);
    setFiles(prev => [...prev, ...newFiles].slice(0, 5));
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set("contact_method", contactMethod);
    files.forEach(f => formData.append("attachments", f));

    try {
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-20 bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="max-w-lg mx-auto bg-card border border-border rounded-lg p-12 shadow-lg">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl uppercase text-foreground mb-2">
              Request Received!
            </h2>
            <p className="text-muted-foreground text-lg">We'll contact you shortly.</p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl uppercase text-center text-foreground mb-14"
        >
          Get a Free Quote
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 space-y-6 shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name *</Label>
              <Input id="name" name="name" required placeholder="Your name" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="Your phone number" className="bg-background border-border" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your email" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground">Address</Label>
              <Input id="address" name="address" placeholder="Pickup address" className="bg-background border-border" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">Description of Junk *</Label>
            <Textarea id="description" name="description" required placeholder="Tell us what you need removed..." className="bg-background border-border min-h-[120px]" />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Upload Images (optional, up to 5)</Label>
            <div
              className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground text-sm">Click to upload images (max 8MB each)</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {files.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center gap-2 bg-background border border-border rounded px-3 py-1 text-sm text-foreground">
                    {file.name.slice(0, 20)}{file.name.length > 20 ? "..." : ""}
                    <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Preferred Contact Method</Label>
            <RadioGroup value={contactMethod} onValueChange={setContactMethod} className="flex gap-6">
              {[
                { value: "call", label: "Call" },
                { value: "text", label: "Text" },
                { value: "email", label: "Email" },
              ].map(opt => (
                <div key={opt.value} className="flex items-center gap-2">
                  <RadioGroupItem value={opt.value} id={`contact-${opt.value}`} />
                  <Label htmlFor={`contact-${opt.value}`} className="text-foreground cursor-pointer">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked === true)}
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-snug">
              I authorize JUNK IT V5 to contact me regarding this request. *
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={!consent || submitting}
            className="w-full font-heading uppercase tracking-wide text-lg h-14 hover:brightness-90 transition-all"
          >
            {submitting ? "Sending..." : "Submit Quote Request"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteForm;
