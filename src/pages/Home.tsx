import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Calendar,
  Clapperboard,
  Crown,
  Globe,
  Mic,
  Plus,
  Radio,
  Rocket,
  Scissors,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const BRAND_PURPLE = '#844ef1';
const ICON_COLOR = '#0b0612';
const LAUNCH_DISCOUNT_LABEL = 'Desconto de lançamento do site';

const entryPackages = [
  {
    id: 'start-1',
    title: 'Start - Conteúdo',
    family: 'Gravação Única',
    originalPrice: 'R$ 1.500',
    price: 'R$ 997',
    description:
      'Solução enxuta para começar a produzir conteúdo com qualidade e estratégia, sem operação pesada.',
    bullets: [
      'Briefing estratégico rápido',
      '4 roteiros curtos',
      '4 Carrosséis',
      'Gravação otimizada (até 1h30)',
      '4 vídeos editados prontos',
    ],
    icon: Rocket,
    color: BRAND_PURPLE,
    link: '/contato',
    cta: 'Quero começar',
  },
  {
    id: 'start-2',
    title: 'Start Plus - Conteúdo',
    family: 'Gravação Única',
    originalPrice: 'R$ 3.500',
    price: 'R$ 2.670',
    description:
      'Estrutura mais completa para validar conteúdo com qualidade e ganhar presença digital.',
    bullets: [
      'Briefing estratégico completo',
      '6 roteiros curtos',
      '4 Carrosséis + 4 criativos',
      'Gravação otimizada (até 2h)',
      '6 vídeos editados prontos',
    ],
    icon: Plus,
    color: BRAND_PURPLE,
    link: '/contato',
    cta: 'Quero começar',
  },
];

const corePackages = [
  {
    id: 1,
    title: 'Editoria Essencial',
    family: 'Conteúdo Editorial',
    originalPrice: 'R$ 8.500/mês',
    price: 'R$ 4.985/mês',
    description:
      'Base mensal para marca que quer consistência com estratégia e produção profissional.',
    bullets: ['8 vídeos verticais', '8 carrosséis', '4 estáticos', 'Marketing 360 essencial'],
    icon: Sparkles,
    color: BRAND_PURPLE,
    link: '/pacotes',
    cta: 'Ver detalhes',
  },
  {
    id: 2,
    title: 'Editoria PRO',
    family: 'Conteúdo Editorial',
    originalPrice: 'R$ 12.500/mês',
    price: 'R$ 8.470/mês',
    description:
      'Operação editorial com performance avançada para crescimento de marca e vendas.',
    bullets: ['12 vídeos verticais', '12 carrosséis', '4 estáticos', 'SWOT + Tráfego Pago'],
    icon: TrendingUp,
    color: BRAND_PURPLE,
    link: '/pacotes',
    cta: 'Ver detalhes',
    badge: 'MAIS COMPLETO',
  },
  {
    id: 3,
    title: 'Podcast Básico',
    family: 'Podcast Mensal',
    originalPrice: 'R$ 5.000/mês',
    price: 'R$ 3.982/mês',
    description: 'Entrada ideal para iniciar autoridade com podcast profissional e rotina editorial.',
    bullets: ['1 diária', '3 episódios', 'Até 2 participantes', 'Cortes'],
    icon: Mic,
    color: BRAND_PURPLE,
    link: '/pacotes',
    cta: 'Ver detalhes',
  },
  {
    id: 4,
    title: 'Podcast Intermediário',
    family: 'Podcast Mensal',
    originalPrice: 'R$ 7.500/mês',
    price: 'R$ 5.950/mês',
    description: 'Formato recorrente para manter frequência semanal com mais dinâmica de convidados.',
    bullets: ['1 diária', 'Até 5 episódios', 'Até 4 participantes', 'Cortes'],
    icon: Radio,
    color: BRAND_PURPLE,
    link: '/pacotes',
    cta: 'Ver detalhes',
    badge: 'MAIS POPULAR',
  },
  {
    id: 5,
    title: 'Podcast PRO',
    family: 'Podcast Mensal',
    originalPrice: 'R$ 13.000/mês',
    price: 'R$ 9.989/mês',
    description:
      'Alta cadência para ocupar espaço digital com volume forte e padrão premium de produção.',
    bullets: ['2 diárias', 'Até 10 episódios', 'Até 4 participantes', 'Entrega estratégica mensal'],
    icon: Crown,
    color: BRAND_PURPLE,
    link: '/pacotes',
    cta: 'Ver detalhes',
  },
  {
    id: 6,
    title: 'Automação & Sistemas',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 5.000/projeto',
    description:
      'Chatbots, fluxos e sistemas personalizados para escalar sem inflar equipe operacional.',
    bullets: ['Chatbots inteligentes', 'Integrações de sistemas', 'Apps internos', 'Automação operacional'],
    icon: Bot,
    color: BRAND_PURPLE,
    link: '/contato',
    cta: 'Agendar diagnóstico',
  },
  {
    id: 7,
    title: 'Sites & Experiências',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 5.000/projeto',
    description:
      'Site estratégico com foco em posicionamento, conversão e crescimento digital sustentável.',
    bullets: ['Diagnóstico estratégico', 'UX e design personalizado', 'Desenvolvimento responsivo', 'Publicação e orientação'],
    icon: Globe,
    color: BRAND_PURPLE,
    link: '/contato',
    cta: 'Solicitar proposta',
  },
  {
    id: 8,
    title: 'Filmmaker Audiovisual',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 3.000/projeto',
    description:
      'Projeto audiovisual completo com conceito, direção, captação e finalização profissional.',
    bullets: ['Conceito criativo', 'Roteiro e pré-produção', 'Captação profissional', 'Pós-produção estratégica'],
    icon: Clapperboard,
    color: BRAND_PURPLE,
    link: '/contato',
    cta: 'Solicitar proposta',
  },
];

const cutAddons = [
  {
    id: 1,
    title: 'Cortes Básicos',
    price: 'Incluso',
    note: '15 cortes básicos para manter presença diária.',
    icon: Scissors,
    color: BRAND_PURPLE,
  },
  {
    id: 2,
    title: 'Cortes Profissionais',
    price: '30 por R$ 900',
    note: 'Cadência maior para escalar distribuição no mês.',
    icon: Scissors,
    color: BRAND_PURPLE,
  },
  {
    id: 3,
    title: 'Cortes Profissionais',
    price: '50 por R$ 1.500',
    note: 'Operação intensa de cortes com ritmo constante.',
    icon: Scissors,
    color: BRAND_PURPLE,
  },
  {
    id: 4,
    title: 'Cortes Premium',
    price: '4 por R$ 1.400',
    note: 'Peças com acabamento superior para impacto e autoridade.',
    icon: Sparkles,
    color: BRAND_PURPLE,
  },
  {
    id: 5,
    title: 'Cortes Premium',
    price: '10 por R$ 3.000',
    note: 'Bloco premium para campanhas e performance elevada.',
    icon: Sparkles,
    color: BRAND_PURPLE,
  },
];

const deliveryFlow = [
  {
    id: 1,
    title: 'Diagnóstico',
    text: 'Mapeamos objetivo, público e meta de negócio antes de produzir.',
    icon: Target,
    color: BRAND_PURPLE,
  },
  {
    id: 2,
    title: 'Produção',
    text: 'Executamos conteúdo, podcast ou projeto com direção e padrão premium.',
    icon: Calendar,
    color: BRAND_PURPLE,
  },
  {
    id: 3,
    title: 'Entrega',
    text: 'Você recebe tudo organizado para publicar, vender e acompanhar.',
    icon: Sparkles,
    color: BRAND_PURPLE,
  },
  {
    id: 4,
    title: 'Otimização',
    text: 'Ajustamos com base em dados para evoluir mês a mês.',
    icon: BarChart3,
    color: BRAND_PURPLE,
  },
];

function PriceDisplay({ item }) {
  if (!item.originalPrice) {
    return (
      <div
        style={{
          fontSize: '26px',
          lineHeight: 1,
          fontWeight: 900,
          minHeight: '56px',
          background: `linear-gradient(135deg, ${item.color}, ${item.color}d8)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {item.price}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '92px' }}>
      <div
        style={{
          display: 'inline-flex',
          marginBottom: '7px',
          padding: '4px 8px',
          borderRadius: '999px',
          background: 'rgba(140,82,255,0.14)',
          border: '1px solid rgba(140,82,255,0.24)',
          color: 'var(--purple-2)',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: 0,
          textTransform: 'uppercase',
        }}
      >
        {LAUNCH_DISCOUNT_LABEL}
      </div>
      <div
        style={{
          color: 'var(--muted)',
          fontSize: '15px',
          fontWeight: 700,
          marginBottom: '6px',
          textDecoration: 'line-through',
          textDecorationThickness: '2px',
        }}
      >
        {item.originalPrice}
      </div>
      <div
        style={{
          fontSize: '28px',
          lineHeight: 1,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${item.color}, ${item.color}d8)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {item.price}
      </div>
    </div>
  );
}

export function Home() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredPackageIcon, setHoveredPackageIcon] = useState<number | null>(null);

  const [hoveredAddon, setHoveredAddon] = useState<number | null>(null);
  const [hoveredAddonIcon, setHoveredAddonIcon] = useState<number | null>(null);

  const [hoveredFlow, setHoveredFlow] = useState<number | null>(null);
  const [hoveredFlowIcon, setHoveredFlowIcon] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(700px 260px at 12% 0%, rgba(140,82,255,0.12), transparent 60%), radial-gradient(680px 280px at 90% 8%, rgba(167,123,255,0.12), transparent 62%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <section className="container relative z-10" style={{ paddingTop: '84px', paddingBottom: '72px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}
        >
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '14px' }}>
            NOVA SOMA
          </div>

          <h1 style={{ fontSize: '58px', lineHeight: 1.05, margin: '0 0 18px', color: 'var(--white)' }}>
            Conteúdo, podcast e tecnologia em uma{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              única operação de crescimento
            </span>
          </h1>

          <p
            style={{
              fontSize: '19px',
              color: 'var(--muted)',
              maxWidth: '760px',
              margin: '0 auto 30px',
            }}
          >
            A SOMA entrega da estratégia à execução com pacotes claros, rotina mensal e projetos sob medida para
            gerar valor, autoridade e vendas.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contato">
              <motion.button
                className="cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{ fontSize: '15px', padding: '14px 30px' }}
              >
                Agendar reunião
              </motion.button>
            </Link>

            <Link to="/pacotes">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{
                  padding: '14px 30px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--white)',
                  cursor: 'pointer',
                  fontSize: '15px',
                }}
              >
                Ver todos os pacotes
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '68px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
            PACOTES DE ENTRADA
          </div>
          <h2 style={{ fontSize: '42px', margin: 0, color: 'var(--white)' }}>Gravação única para começar</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {entryPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isTopRow = index < 4;
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: hoveredPackage === pkg.id ? 1.05 : 1,
                  rotateY: hoveredPackage === pkg.id ? 5 : 0,
                }}
                transition={{ duration: hoveredPackage === pkg.id ? 0.2 : 0.12, type: 'spring', stiffness: 100 }}
                onHoverStart={() => setHoveredPackage(pkg.id)}
                onHoverEnd={() => setHoveredPackage(null)}
                whileHover={isTopRow ? { y: -10, z: 30 } : { y: 0, z: 30 }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  border: hoveredPackage === pkg.id ? `1px solid ${pkg.color}50` : '1px solid var(--glass-border)',
                  background: hoveredPackage === pkg.id
                    ? `linear-gradient(180deg, ${pkg.color}15, rgba(255,255,255,0.02))`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  boxShadow: hoveredPackage === pkg.id
                    ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${pkg.color}20`
                    : '0 8px 20px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%',
                  transformOrigin: isTopRow ? 'center center' : 'center top',
                }}
              >
                {pkg.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                      color: ICON_COLOR,
                      fontWeight: 900,
                      fontSize: '13px',
                      letterSpacing: '0.35px',
                      textTransform: 'uppercase',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      boxShadow: '0 10px 24px rgba(140,82,255,0.45)',
                      zIndex: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Sparkles size={12} color={ICON_COLOR} />
                    {pkg.badge}
                  </div>
                )}

                <motion.div
                  onHoverStart={() => setHoveredPackageIcon(pkg.id)}
                  onHoverEnd={() => setHoveredPackageIcon(null)}
                  animate={{ rotate: hoveredPackageIcon === pkg.id ? 360 : 0, scale: hoveredPackageIcon === pkg.id ? 1.1 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.8,
                      ease: 'easeInOut',
                      rotate: { duration: 0.8 },
                    },
                    scale: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: hoveredPackage === pkg.id
                      ? `linear-gradient(135deg, ${pkg.color}ff, ${pkg.color}cc)`
                      : `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    marginTop: '0',
                    boxShadow: hoveredPackage === pkg.id
                      ? `0 12px 32px ${pkg.color}60, 0 0 20px ${pkg.color}40`
                      : `0 8px 24px ${pkg.color}30`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '12px',
                      background: `radial-gradient(circle at center, ${pkg.color}60 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                      opacity: hoveredPackage === pkg.id ? 0.8 : 0.3,
                      transition: 'opacity 0.3s ease',
                      zIndex: 1,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: hoveredPackage === pkg.id ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse',
                      },
                    }}
                    style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}
                  >
                    <Icon
                      size={28}
                      color={ICON_COLOR}
                      style={{
                        filter: hoveredPackage === pkg.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </motion.div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '12px',
                      background: `radial-gradient(circle at 50% 50%, transparent 30%, ${pkg.color}20 70%)`,
                      opacity: hoveredPackage === pkg.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                </motion.div>

                <div style={{ marginBottom: '12px' }}>
                  <h3
                    style={{
                      margin: '0 0 6px',
                      color: 'var(--white)',
                      fontSize: '23px',
                      lineHeight: 1.15,
                      minHeight: '54px',
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <div
                    style={{
                      marginBottom: '12px',
                      color: 'var(--purple-2)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.7px',
                    }}
                  >
                    {pkg.family}
                  </div>
                  <PriceDisplay item={pkg} />
                </div>

                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    margin: '0 0 16px',
                    minHeight: '88px',
                  }}
                >
                  {pkg.description}
                </p>

                <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none' }}>
                  {pkg.bullets.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 + itemIndex * 0.05 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                        color: 'var(--white)',
                        fontSize: '13px',
                      }}
                    >
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: pkg.color,
                          boxShadow: `0 0 8px ${pkg.color}`,
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to={pkg.link} style={{ marginTop: 'auto' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--white)',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
                    }}
                  >
                    {pkg.cta}
                    <ArrowUpRight size={16} />
                  </motion.button>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '86px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
            PACOTES E VALORES
          </div>
          <h2 style={{ fontSize: '42px', margin: 0, color: 'var(--white)' }}>Estrutura comercial da SOMA</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {corePackages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isTopRow = index < 4;
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: hoveredPackage === pkg.id ? 1.05 : 1,
                  rotateY: hoveredPackage === pkg.id ? 5 : 0,
                }}
                transition={{ duration: hoveredPackage === pkg.id ? 0.2 : 0.12, type: 'spring', stiffness: 100 }}
                onHoverStart={() => setHoveredPackage(pkg.id)}
                onHoverEnd={() => setHoveredPackage(null)}
                whileHover={isTopRow ? { y: -10, z: 30 } : { y: 0, z: 30 }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  border: hoveredPackage === pkg.id ? `1px solid ${pkg.color}50` : '1px solid var(--glass-border)',
                  background: hoveredPackage === pkg.id
                    ? `linear-gradient(180deg, ${pkg.color}15, rgba(255,255,255,0.02))`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  boxShadow: hoveredPackage === pkg.id
                    ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${pkg.color}20`
                    : '0 8px 20px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%',
                  transformOrigin: isTopRow ? 'center center' : 'center top',
                }}
              >
                {pkg.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                      color: ICON_COLOR,
                      fontWeight: 900,
                      fontSize: '13px',
                      letterSpacing: '0.35px',
                      textTransform: 'uppercase',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      boxShadow: '0 10px 24px rgba(140,82,255,0.45)',
                      zIndex: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Sparkles size={12} color={ICON_COLOR} />
                    {pkg.badge}
                  </div>
                )}

                <motion.div
                  onHoverStart={() => setHoveredPackageIcon(pkg.id)}
                  onHoverEnd={() => setHoveredPackageIcon(null)}
                  animate={{ rotate: hoveredPackageIcon === pkg.id ? 360 : 0, scale: hoveredPackageIcon === pkg.id ? 1.1 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.8,
                      ease: 'easeInOut',
                      rotate: { duration: 0.8 },
                    },
                    scale: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: hoveredPackage === pkg.id
                      ? `linear-gradient(135deg, ${pkg.color}ff, ${pkg.color}cc)`
                      : `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    marginTop: '0',
                    boxShadow: hoveredPackage === pkg.id
                      ? `0 12px 32px ${pkg.color}60, 0 0 20px ${pkg.color}40`
                      : `0 8px 24px ${pkg.color}30`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '12px',
                      background: `radial-gradient(circle at center, ${pkg.color}60 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                      opacity: hoveredPackage === pkg.id ? 0.8 : 0.3,
                      transition: 'opacity 0.3s ease',
                      zIndex: 1,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: hoveredPackage === pkg.id ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse',
                      },
                    }}
                    style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}
                  >
                    <Icon
                      size={28}
                      color={ICON_COLOR}
                      style={{
                        filter: hoveredPackage === pkg.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </motion.div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '12px',
                      background: `radial-gradient(circle at 50% 50%, transparent 30%, ${pkg.color}20 70%)`,
                      opacity: hoveredPackage === pkg.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                </motion.div>

                <div style={{ marginBottom: '12px' }}>
                  <h3
                    style={{
                      margin: '0 0 6px',
                      color: 'var(--white)',
                      fontSize: '23px',
                      lineHeight: 1.15,
                      minHeight: '54px',
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <div
                    style={{
                      marginBottom: '12px',
                      color: 'var(--purple-2)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.7px',
                    }}
                  >
                    {pkg.family}
                  </div>
                  <PriceDisplay item={pkg} />
                </div>

                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    margin: '0 0 16px',
                    minHeight: '88px',
                  }}
                >
                  {pkg.description}
                </p>

                <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none' }}>
                  {pkg.bullets.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 + itemIndex * 0.05 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                        color: 'var(--white)',
                        fontSize: '13px',
                      }}
                    >
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: pkg.color,
                          boxShadow: `0 0 8px ${pkg.color}`,
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to={pkg.link} style={{ marginTop: 'auto' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--white)',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
                    }}
                  >
                    {pkg.cta}
                    <ArrowUpRight size={16} />
                  </motion.button>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '82px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
            ADICIONAIS PARA PODCAST
          </div>
          <h3 style={{ margin: 0, fontSize: '36px', color: 'var(--white)' }}>Cortes</h3>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '14px',
          }}
        >
          {cutAddons.map((addon) => {
            const Icon = addon.icon;
            return (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: hoveredAddon === addon.id ? 1.05 : 1,
                  rotateY: hoveredAddon === addon.id ? 5 : 0,
                }}
                transition={{ duration: hoveredAddon === addon.id ? 0.2 : 0.12, type: 'spring', stiffness: 100 }}
                onHoverStart={() => setHoveredAddon(addon.id)}
                onHoverEnd={() => setHoveredAddon(null)}
                whileHover={{ y: -10, z: 30 }}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: hoveredAddon === addon.id
                    ? `linear-gradient(180deg, ${addon.color}15, rgba(255,255,255,0.02))`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: hoveredAddon === addon.id
                    ? `1px solid ${addon.color}50`
                    : '1px solid var(--glass-border)',
                  boxShadow: hoveredAddon === addon.id
                    ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${addon.color}20`
                    : '0 8px 20px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
                  position: 'relative',
                }}
              >
                <motion.div
                  onHoverStart={() => setHoveredAddonIcon(addon.id)}
                  onHoverEnd={() => setHoveredAddonIcon(null)}
                  animate={{ rotate: hoveredAddonIcon === addon.id ? 360 : 0, scale: hoveredAddonIcon === addon.id ? 1.1 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.8,
                      ease: 'easeInOut',
                      rotate: { duration: 0.8 },
                    },
                    scale: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: hoveredAddon === addon.id
                      ? `linear-gradient(135deg, ${addon.color}ff, ${addon.color}cc)`
                      : `linear-gradient(135deg, ${addon.color}, ${addon.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    boxShadow: hoveredAddon === addon.id
                      ? `0 12px 32px ${addon.color}60, 0 0 20px ${addon.color}40`
                      : `0 8px 24px ${addon.color}30`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '10px',
                      background: `radial-gradient(circle at center, ${addon.color}60 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                      opacity: hoveredAddon === addon.id ? 0.8 : 0.3,
                      transition: 'opacity 0.3s ease',
                      zIndex: 1,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: hoveredAddon === addon.id ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse',
                      },
                    }}
                    style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}
                  >
                    <Icon
                      size={20}
                      color={ICON_COLOR}
                      style={{
                        filter: hoveredAddon === addon.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </motion.div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '10px',
                      background: `radial-gradient(circle at 50% 50%, transparent 30%, ${addon.color}20 70%)`,
                      opacity: hoveredAddon === addon.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                </motion.div>

                <h4 style={{ margin: '0 0 5px', color: 'var(--white)', fontSize: '18px' }}>{addon.title}</h4>
                <div style={{ color: 'var(--purple-2)', fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>{addon.price}</div>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.45 }}>{addon.note}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '92px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
            MÉTODO SOMA
          </div>
          <h3 style={{ margin: 0, fontSize: '38px', color: 'var(--white)' }}>Como fazemos a entrega</h3>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {deliveryFlow.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: hoveredFlow === step.id ? 1.05 : 1,
                  rotateY: hoveredFlow === step.id ? 5 : 0,
                }}
                transition={{ duration: hoveredFlow === step.id ? 0.2 : 0.12, type: 'spring', stiffness: 100 }}
                onHoverStart={() => setHoveredFlow(step.id)}
                onHoverEnd={() => setHoveredFlow(null)}
                whileHover={{ y: -10, z: 30 }}
                style={{
                  borderRadius: '14px',
                  border: hoveredFlow === step.id ? `1px solid ${step.color}50` : '1px solid rgba(255,255,255,0.08)',
                  background: hoveredFlow === step.id
                    ? `linear-gradient(180deg, ${step.color}15, rgba(255,255,255,0.02))`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))',
                  padding: '22px',
                  boxShadow: hoveredFlow === step.id
                    ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${step.color}20`
                    : '0 8px 20px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
                  position: 'relative',
                }}
              >
                <motion.div
                  onHoverStart={() => setHoveredFlowIcon(step.id)}
                  onHoverEnd={() => setHoveredFlowIcon(null)}
                  animate={{ rotate: hoveredFlowIcon === step.id ? 360 : 0, scale: hoveredFlowIcon === step.id ? 1.1 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.8,
                      ease: 'easeInOut',
                      rotate: { duration: 0.8 },
                    },
                    scale: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: hoveredFlow === step.id
                      ? `linear-gradient(135deg, ${step.color}ff, ${step.color}cc)`
                      : `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    boxShadow: hoveredFlow === step.id
                      ? `0 12px 32px ${step.color}60, 0 0 20px ${step.color}40`
                      : `0 8px 24px ${step.color}30`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '10px',
                      background: `radial-gradient(circle at center, ${step.color}60 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                      opacity: hoveredFlow === step.id ? 0.8 : 0.3,
                      transition: 'opacity 0.3s ease',
                      zIndex: 1,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: hoveredFlow === step.id ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse',
                      },
                    }}
                    style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}
                  >
                    <Icon
                      size={20}
                      color={ICON_COLOR}
                      style={{
                        filter: hoveredFlow === step.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </motion.div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '10px',
                      background: `radial-gradient(circle at 50% 50%, transparent 30%, ${step.color}20 70%)`,
                      opacity: hoveredFlow === step.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                </motion.div>

                <h4 style={{ margin: '0 0 8px', color: 'var(--white)', fontSize: '20px' }}>{step.title}</h4>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5 }}>{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '110px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            padding: '48px',
            borderRadius: '16px',
            border: '1px solid rgba(140,82,255,0.2)',
            background: 'linear-gradient(135deg, rgba(140,82,255,0.08), rgba(167,123,255,0.04))',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            transformStyle: 'preserve-3d',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(140,82,255,0.1) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ margin: '0 0 12px', color: 'var(--white)', fontSize: '34px' }}>
              Quer montar sua estrutura ideal?
            </h3>
            <p style={{ margin: '0 auto 26px', maxWidth: '680px', color: 'var(--muted)', fontSize: '16px' }}>
              A gente cruza objetivo, orçamento e fase do negócio para montar combinação de pacotes e módulos com
              previsibilidade de entrega.
            </p>

            <Link to="/contato">
              <motion.button
                className="cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{ fontSize: '16px', padding: '14px 30px' }}
              >
                Falar com especialista SOMA
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulse {
              0%, 100% {
                opacity: 0.5;
                transform: scale(1);
              }
              50% {
                opacity: 0.8;
                transform: scale(1.05);
              }
            }
          `,
        }}
      />
    </div>
  );
}
