import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Il credito d'imposta ZES vale anche per le ristrutturazioni?",
      answer: "Sì, il credito d'imposta è applicabile all'acquisto, alla realizzazione e all'ampliamento di immobili strumentali agli investimenti. La ristrutturazione è agevolabile se comporta un potenziamento della capacità produttiva o un miglioramento tecnologico/strutturale significativo dell'asset."
    },
    {
      question: "Quali sono i tempi per ottenere l'Autorizzazione Unica?",
      answer: "L'Autorizzazione Unica ZES prevede un iter semplificato e accelerato. I tempi di conclusione del procedimento non possono superare i termini perentori previsti dalla legge, che variano a seconda della complessità del progetto, ma sono drasticamente ridotti rispetto all'iter ordinario (spesso dimezzati)."
    },
    {
      question: "Operate solo su grandi impianti industriali?",
      answer: "Assolutamente no. 2D Sviluppo Immobiliare segue con la stessa attenzione anche progetti di media scala (PMI), come laboratori artigianali, piccoli hub logistici, uffici direzionali e strutture turistiche. Crediamo che lo sviluppo del territorio passi anche dalle piccole e medie imprese."
    },
    {
      question: "Posso proporre il mio terreno agricolo?",
      answer: "Valutiamo terreni agricoli solo se rientrano in aree adiacenti a zone industriali o se i piani regolatori comunali prevedono possibilità di cambio di destinazione d'uso o insediamenti specifici (es. agrituristici o energie rinnovabili, ove permesso). Contattaci per una verifica gratuita."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Domande Frequenti</h2>
          <p className="text-slate-600 mt-2">Risposte chiare ai dubbi più comuni sugli investimenti ZES.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-slate-800 text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;