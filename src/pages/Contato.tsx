import { useState, type CSSProperties, type ComponentType, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Instagram,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';

type ContactMethod = {
  id: number;
  title: string;
  value: string;
  href: string;
  icon: ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
};

const ICON_COLOR = '#0b0612';
const WHATSAPP_NUMBER = '5511963214412';

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: 'E-mail',
    value: 'soma.mktbr@gmail.com',
    href: 'mailto:soma.mktbr@gmail.com',
    icon: Mail,
  },
  {
    id: 2,
    title: 'WhatsApp',
    value: '(11) 96321-4412',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: Phone,
  },
  {
    id: 3,
    title: 'Instagram',
    value: '@soma.mktbr',
    href: 'https://instagram.com/soma.mktbr',
    icon: Instagram,
  },
];

const packageOptions = [
  'Start - Conteúdo',
  'Start Plus - Conteúdo',
  'Editoria Essencial',
  'Editoria PRO',
  'Podcast Básico',
  'Podcast Intermediário',
  'Podcast PRO',
  'Automação & Sistemas',
  'Sites & Experiências Digitais',
  'Filmmaker Audiovisual',
  'Módulos de Cortes',
  'Quero recomendação da SOMA',
];

const flowPoints = [
  'Entendimento do objetivo e estágio do negócio.',
  'Recomendação do pacote ou composição ideal.',
  'Plano inicial com próximos passos claros.',
];

const cardStyle: CSSProperties = {
  borderRadius: '18px',
  border: '1px solid var(--glass-border)',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
  boxShadow: '0 14px 36px rgba(0,0,0,0.34)',
};

const inputStyle: CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.03)',
  padding: '14px 15px',
  color: 'var(--white)',
  fontSize: '14px',
  outline: 'none',
};

const optionStyle: CSSProperties = {
  background: '#0e0d13',
  color: '#ffffff',
};

export function Contato() {
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    interesse: packageOptions[0],
    mensagem: '',
  });

  const hasOddMethodCount = contactMethods.length % 2 !== 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      'Olá, SOMA! Quero solicitar uma proposta.',
      '',
      `Nome: ${formData.nome}`,
      `Contato: ${formData.contato}`,
      `Interesse: ${formData.interesse}`,
      `Mensagem: ${formData.mensagem || 'Não informado'}`,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );

    setFormData({
      nome: '',
      contato: '',
      interesse: packageOptions[0],
      mensagem: '',
    });
  };

  return (
    <div
      className="container contact"
      style={{
        minHeight: 'calc(100vh - 200px)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ marginBottom: '28px' }}
      >
        <div className="kicker" style={{ fontSize: '12px' }}>CONTATO SOMA</div>
        <h1 style={{ margin: '12px 0 14px', color: 'var(--white)', fontSize: '44px' }}>Vamos construir seu plano</h1>
        <p style={{ margin: 0, color: 'var(--muted)', maxWidth: '72ch', fontSize: '18px', lineHeight: 1.65 }}>
          Atendimento estratégico para indicar o formato ideal entre editoria, podcast, audiovisual,
          automação e experiências digitais.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.04 }}
        style={{ ...cardStyle, padding: '24px', marginBottom: '20px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ margin: '0 0 10px', color: 'var(--white)', fontSize: '24px' }}>
              Reunião rápida, direção clara
            </h2>
            <p style={{ margin: '0 0 14px', color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7 }}>
              No primeiro contato já mapeamos prioridade, investimento e melhor composição de entrega.
            </p>
            <div style={{ display: 'grid', gap: '8px' }}>
              {flowPoints.map((point) => (
                <div key={point} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--purple)', lineHeight: '20px' }}>•</span>
                  <span style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: '14px',
              border: '1px solid rgba(140,82,255,0.28)',
              background: 'linear-gradient(180deg, rgba(140,82,255,0.12), rgba(140,82,255,0.04))',
              padding: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <CalendarCheck2 size={18} color="var(--purple-2)" />
              <strong style={{ color: 'var(--white)', fontSize: '15px' }}>Retorno inicial em até 1 dia útil</strong>
            </div>
            <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>
              Você recebe uma proposta objetiva, com escopo e próximos passos para começar sem ruído.
            </p>
          </div>
        </div>
      </motion.section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}
      >
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.07 }}
          onSubmit={handleSubmit}
          style={{ ...cardStyle, padding: '24px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={20} color={ICON_COLOR} strokeWidth={2.5} />
            </div>
            <div style={{ paddingTop: '6px' }}>
              <h3 style={{ margin: 0, color: 'var(--white)', fontSize: '22px', lineHeight: 1.2 }}>
                Solicitar proposta
              </h3>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <label style={{ display: 'grid', gap: '7px' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Nome</span>
              <input
                required
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Seu nome completo"
                style={inputStyle}
              />
            </label>

            <label style={{ display: 'grid', gap: '7px' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>E-mail ou WhatsApp</span>
              <input
                required
                type="text"
                value={formData.contato}
                onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                placeholder="email@dominio.com • (11) 9xxxx-xxxx"
                style={inputStyle}
              />
            </label>

            <label style={{ display: 'grid', gap: '7px' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Interesse</span>
              <select
                value={formData.interesse}
                onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
              >
                {packageOptions.map((option) => (
                  <option key={option} value={option} style={optionStyle}>{option}</option>
                ))}
              </select>
            </label>

            <label style={{ display: 'grid', gap: '7px' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Mensagem</span>
              <textarea
                rows={5}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                placeholder="Conte o objetivo e a prioridade da sua operação."
                style={{ ...inputStyle, minHeight: '128px', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{
              width: '100%',
              marginTop: '16px',
              border: 0,
              borderRadius: '12px',
              padding: '15px 16px',
              background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
              color: ICON_COLOR,
              fontSize: '15px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 12px 26px rgba(140,82,255,0.36)',
            }}
          >
            <Send size={16} />
            Enviar mensagem
          </motion.button>

          <p style={{ margin: '11px 0 0', color: 'var(--muted)', fontSize: '12px', textAlign: 'center' }}>
            Ou por e-mail: <a href="mailto:soma.mktbr@gmail.com" style={{ color: 'var(--purple-2)' }}>soma.mktbr@gmail.com</a>
          </p>
        </motion.form>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{ ...cardStyle, padding: '24px' }}
        >
          <h3 style={{ margin: '0 0 16px', color: 'var(--white)', fontSize: '24px' }}>Canais de atendimento</h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isHovered = hoveredMethod === method.id;
              const isLastOdd = hasOddMethodCount && index === contactMethods.length - 1;

              return (
                <motion.a
                  key={method.id}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setHoveredMethod(method.id)}
                  onHoverEnd={() => setHoveredMethod(null)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    gridColumn: isLastOdd ? '1 / -1' : undefined,
                    borderRadius: '14px',
                    border: isHovered ? '1px solid rgba(140,82,255,0.52)' : '1px solid rgba(255,255,255,0.09)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                    padding: '16px',
                    textDecoration: 'none',
                    transition: 'border-color 0.18s ease',
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.07 : 1,
                    }}
                    transition={{
                      rotate: { duration: 0.8, ease: 'easeInOut' },
                      scale: { duration: 0.2, ease: 'easeInOut' },
                    }}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '10px',
                      boxShadow: isHovered ? '0 12px 24px rgba(140,82,255,0.45)' : '0 8px 18px rgba(140,82,255,0.3)',
                    }}
                  >
                    <Icon size={19} color={ICON_COLOR} strokeWidth={2.5} />
                  </motion.div>

                  <div style={{ color: 'var(--white)', fontSize: '16px', fontWeight: 600, marginBottom: '3px' }}>
                    {method.title}
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.45 }}>{method.value}</div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        style={{
          ...cardStyle,
          marginTop: '20px',
          padding: '20px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <CheckCircle2 size={17} color="var(--purple-2)" />
            <strong style={{ color: 'var(--white)', fontSize: '15px' }}>Quer entender como rodamos a operação?</strong>
          </div>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>
            Veja o fluxo completo de execução, validação e entrega da SOMA.
          </p>
        </div>

        <Link to="/processo" style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--white)',
              padding: '11px 16px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            Ver processo
            <ArrowRight size={15} />
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
}
