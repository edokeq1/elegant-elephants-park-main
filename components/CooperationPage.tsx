import React, { useState, useMemo, useCallback } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, ArrowLeft, Loader2, AlertCircle, Sparkles, Clock, Target, ShieldCheck, MessageSquare, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Notification } from './Notification';
import { sendTelegramMessage } from '../utils/telegram';

interface CooperationPageProps {
  onBack: () => void;
  t: any;
}

// Memoized helper component for inputs to prevent unnecessary full-page re-renders
const InputField = React.memo(({ label, id, type, placeholder, value, onChange, isTextArea = false, isValid, touched, t }: any) => (
  <div className="space-y-2 relative group">
    <div className="flex justify-between items-end px-1">
      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-brand-accent transition-colors">
        {label}
      </label>
      {touched && id !== 'name' && id !== 'message' && (
        <span className={`text-[9px] uppercase tracking-tighter transition-all duration-300 transform ${isValid ? 'text-green-500 opacity-100 translate-y-0' : 'text-red-400 opacity-100 translate-y-0'}`}>
          {isValid ? t.formatValid : t.formatInvalid}
        </span>
      )}
    </div>
    
    <div className="relative">
      {isTextArea ? (
        <textarea
          required
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/10 transition-all resize-none font-sans text-base placeholder:text-gray-600"
        />
      ) : (
        <input
          required
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-brand-dark/50 border rounded-2xl px-5 py-5 text-white focus:outline-none focus:ring-4 transition-all font-sans text-base placeholder:text-gray-600 ${
            touched && !isValid && (id === 'email' || id === 'phone')
              ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/5 focus:animate-shake'
              : 'border-white/10 focus:border-brand-accent/50 focus:ring-brand-accent/10'
          }`}
        />
      )}
      
      {touched && (id === 'email' || id === 'phone') && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-500 transform pointer-events-none">
          {isValid ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in duration-300" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500/50 animate-in fade-in duration-300" />
          )}
        </div>
      )}
    </div>
  </div>
));

InputField.displayName = 'InputField';

export const CooperationPage: React.FC<CooperationPageProps> = ({ onBack, t }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [notification, setNotification] = useState<{ isVisible: boolean; message: string; type: 'error' | 'success' }>({
    isVisible: false,
    message: '',
    type: 'success'
  });

  // Calculate validation on-the-fly to avoid state-driven double rendering
  const validation = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return {
      name: {
        valid: formState.name.trim().length >= 2,
        touched: showValidation
      },
      email: { 
        valid: emailRegex.test(formState.email), 
        touched: showValidation
      },
      phone: { 
        valid: phoneRegex.test(formState.phone), 
        touched: showValidation
      }
    };
  }, [formState.email, formState.phone, showValidation]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowValidation(true);
    
    if (!validation.name.valid || !validation.email.valid || !validation.phone.valid) {
      let message = "";
      if (!validation.name.valid) {
        message = t.errorName;
      } else if (!validation.email.valid && !validation.phone.valid) {
        message = t.errorBoth;
      } else if (!validation.email.valid) {
        message = t.errorEmail;
      } else {
        message = t.errorPhone;
      }
      
      setNotification({
        isVisible: true,
        message,
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);
    
    // Add artificial delay for UX and send the message
    const [, success] = await Promise.all([
      new Promise(resolve => setTimeout(resolve, 1000)),
      sendTelegramMessage({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        message: formState.message,
        source: 'Cooperation'
      })
    ]);

    setIsSubmitting(false);

    if (success) {
      setIsSubmitted(true);
      setNotification({
        isVisible: true,
        message: t.successInquiry,
        type: 'success'
      });
    } else {
      setNotification({
        isVisible: true,
        message: 'Сталася помилка при відправці. Спробуйте пізніше або зв\'яжіться з нами напряму.',
        type: 'error'
      });
    }
  };

  const whyUsWithIcons = useMemo(() => [
    { ...t.whyUs[0], icon: <Sparkles className="w-5 h-5" /> },
    { ...t.whyUs[1], icon: <MessageSquare className="w-5 h-5" /> },
    { ...t.whyUs[2], icon: <Target className="w-5 h-5" /> },
    { ...t.whyUs[3], icon: <ShieldCheck className="w-5 h-5" /> },
    { ...t.whyUs[4], icon: <Clock className="w-5 h-5" /> },
    { ...t.whyUs[5], icon: <Target className="w-5 h-5" /> },
  ], [t.whyUs]);

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 md:pt-24 pb-8 px-4 md:px-12 relative overflow-visible animate-fade-in">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
      
      {/* Background decoration - optimized with lower blur and opacity */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] -mr-96 -mt-96 pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] -ml-64 -mb-64 pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[9px] md:text-[10px] tracking-[0.4em] font-black mb-8 md:mb-10 group opacity-0 animate-reveal-up stagger-1"
        >
          <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          {t.back}
        </button>

        <div className="grid lg:grid-cols-[1.1fr_450px] gap-12 lg:gap-32 items-start">
          
          {/* Info Side */}
          <div className="space-y-10 md:space-y-16">
            <div className="space-y-6 md:space-y-8 opacity-0 animate-reveal-up stagger-2">
              <div className="inline-block">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border-l-4 border-brand-accent pl-4 py-1">
                  {t.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tighter leading-[0.9] text-white">
                {t.title1} <br />
                <span className="font-black text-brand-accent-light bg-clip-text">{t.title2}</span>
              </h1>
              <p className="text-gray-400 text-base md:text-xl max-w-lg leading-relaxed font-light md:border-l border-white/10 md:pl-8">
                {t.description}
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {whyUsWithIcons.map((item, index) => (
                <div key={index} className={`group p-5 md:p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/20 transition-all duration-500 opacity-0 animate-reveal-up stagger-${index + 3}`}>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[11px] md:text-sm font-black uppercase tracking-widest mb-1.5 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative isolate group/form mt-12 lg:mt-0 opacity-0 animate-reveal-up stagger-3">
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-accent/10 to-transparent rounded-[40px] blur-xl opacity-30 group-hover/form:opacity-60 transition-opacity duration-700 -z-10" />
            
            <div className="bg-[#1F2F3D]/80 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[32px] md:rounded-[40px] shadow-3xl overflow-hidden relative">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-green-500 blur-2xl opacity-10" />
                    <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">{t.successTitle}</h2>
                    <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xs mx-auto">
                      {t.successText}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setShowValidation(false);
                      setFormState({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="text-xs uppercase tracking-[0.3em] text-brand-accent hover:text-white transition-colors"
                  >
                    {t.successAction}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 md:space-y-8">
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{t.formTitle}</h2>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500">{t.formSubtitle}</p>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <InputField 
                      label={t.nameLabel}
                      id="name"
                      type="text"
                      placeholder={t.placeholderName}
                      value={formState.name}
                      touched={validation.name.touched}
                      isValid={validation.name.valid}
                      onChange={(val: string) => handleInputChange('name', val)}
                      t={t}
                    />

                    <div className="grid md:grid-cols-1 gap-6">
                      <InputField 
                        label={t.emailLabel}
                        id="email"
                        type="email"
                        placeholder={t.placeholderEmail}
                        value={formState.email}
                        touched={validation.email.touched}
                        isValid={validation.email.valid}
                        onChange={(val: string) => handleInputChange('email', val)}
                        t={t}
                      />
                      <InputField 
                        label={t.phoneLabel}
                        id="phone"
                        type="tel"
                        placeholder={t.placeholderPhone}
                        value={formState.phone}
                        touched={validation.phone.touched}
                        isValid={validation.phone.valid}
                        onChange={(val: string) => handleInputChange('phone', val)}
                        t={t}
                      />
                    </div>

                    <div className="space-y-1">
                      <InputField 
                        label={t.messageLabel}
                        id="message"
                        isTextArea
                        placeholder={t.placeholderMessage}
                        value={formState.message}
                        onChange={(val: string) => handleInputChange('message', val)}
                        t={t}
                      />
                      <p className="text-[10px] text-gray-500 font-light px-1">
                        {t.privacyConsent}
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full relative group/btn overflow-hidden py-4 md:py-6 rounded-2xl font-black uppercase tracking-[0.4em] transition-all duration-500 text-[10px] md:text-xs shadow-2xl ${
                      isSubmitting 
                      ? 'bg-brand-charcoal text-brand-accent cursor-not-allowed' 
                      : 'bg-brand-accent text-brand-dark hover:bg-white hover:shadow-[0_0_40px_rgba(141,163,181,0.3)] active:scale-95'
                    }`}
                  >
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-white/10 animate-pulse" />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t.processing}
                        </>
                      ) : (
                        <>
                          {t.submit}
                          <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notification 
        {...notification}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
};
