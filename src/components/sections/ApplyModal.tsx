import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { APV_DATA } from "@/data/content";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    degree: "",
    optionalSubject: "History",
    annualIncome: "< 3 Lakhs",
    termsAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2 pb-1">
            <Badge variant="navy">BATCH 2026</Badge>
            <span className="meta-label text-ink-500 text-[10px]">
              CIVIL SERVICES FELLOWSHIP REGISTRATION
            </span>
          </div>
          <DialogTitle>Arya Pratibha Vikas Sansthan</DialogTitle>
          <DialogDescription>
            Sushil Raj Kendra • New Delhi Entrance Screening Application
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="mx-auto w-14 h-14 rounded-pill bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-navy-950">
                Registration Acknowledged
              </h3>
              <p className="text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-navy-950 font-bold">{formData.fullName || "Candidate"}</strong>. Your application for the 2026 entrance screening has been registered.
              </p>
            </div>

            <div className="p-5 rounded-card bg-paper-subtle card-border text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-ink-500">Candidate Email:</span>
                <span className="font-bold text-navy-950">{formData.email || "candidate@email.com"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-500">Helpline Contact:</span>
                <span className="font-bold text-navy-950">{APV_DATA.meta.helpline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-500">Screening Center:</span>
                <span className="font-bold text-navy-950">New Delhi Campus</span>
              </div>
            </div>

            <p className="text-xs text-ink-500 max-w-sm mx-auto">
              You will receive details on admit cards, syllabus breakdown, and written essay dates via email.
            </p>

            <Button onClick={handleReset} variant="primary" size="md">
              Return to Website
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            {/* Step 1: Personal Profile */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="p-4 rounded-card-sm bg-navy-50 border border-navy-100 flex items-start space-x-3 text-xs text-navy-900">
                  <AlertCircle className="h-4 w-4 text-navy-900 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Eligibility Requirement: Indian Citizen holding a Bachelor's degree (or appearing in final semester), eligible for UPSC Civil Services Examination.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="candidate@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Home State / UT *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajasthan, Uttar Pradesh, Bihar"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="button"
                    onClick={() => {
                      if (!formData.fullName || !formData.email || !formData.phone) {
                        alert("Please provide required personal details.");
                        return;
                      }
                      setStep(2);
                    }}
                    variant="primary"
                    size="md"
                    className="flex items-center space-x-1.5"
                  >
                    <span>Proceed to Academic Information</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Academic & Need Profile */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Graduation Degree & College *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. B.A. (DU) / B.Tech (NIT)"
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      UPSC Mains Optional Subject *
                    </label>
                    <select
                      value={formData.optionalSubject}
                      onChange={(e) =>
                        setFormData({ ...formData, optionalSubject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900 font-sans"
                    >
                      <option value="History">History</option>
                      <option value="Geography">Geography</option>
                      <option value="PSIR">Political Science & IR (PSIR)</option>
                      <option value="Public Administration">Public Administration</option>
                      <option value="Sociology">Sociology</option>
                      <option value="Philosophy">Philosophy</option>
                      <option value="Hindi Literature">Hindi Literature</option>
                      <option value="Anthropology">Anthropology</option>
                      <option value="Other">Other Discipline</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Annual Family Income (Need Evaluation) *
                    </label>
                    <select
                      value={formData.annualIncome}
                      onChange={(e) =>
                        setFormData({ ...formData, annualIncome: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-white text-ink-900 focus:outline-none focus:border-navy-900 font-sans"
                    >
                      <option value="< 2 Lakhs">Below ₹ 2,00,000 (Priority 100% Scholarship)</option>
                      <option value="2-4 Lakhs">₹ 2,00,000 – ₹ 4,00,000</option>
                      <option value="4-8 Lakhs">₹ 4,00,000 – ₹ 8,00,000</option>
                      <option value="> 8 Lakhs">Above ₹ 8,00,000</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="meta-label text-[10px] text-ink-700">
                      Target Exam Session
                    </label>
                    <input
                      type="text"
                      disabled
                      value="UPSC CSE 2026 / 2027"
                      className="w-full px-4 py-2.5 rounded-pill text-xs border border-ink-900/15 bg-paper-subtle text-ink-500 font-bold"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start space-x-2.5 text-xs text-ink-700 leading-relaxed cursor-pointer">
                    <input
                      required
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) =>
                        setFormData({ ...formData, termsAccepted: e.target.checked })
                      }
                      className="mt-0.5 rounded border-ink-300 text-navy-900 focus:ring-0"
                    />
                    <span>
                      I affirm that the information provided is true and I agree to abide by the disciplinary rules of Sushil Raj Arya Pratibha Vikas Kendra, New Delhi.
                    </span>
                  </label>
                </div>

                <div className="flex justify-between pt-4 border-t border-ink-900/10">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    variant="outline"
                    size="md"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    disabled={!formData.termsAccepted}
                    variant="primary"
                    size="md"
                  >
                    Submit Application for 2026 Batch
                  </Button>
                </div>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
