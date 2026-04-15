import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Globe,
  Mic,
  Plus,
  Radio,
  Rocket,
  Scissors,
  Sparkles,
  TrendingUp,
  Crown,
} from 'lucide-react';

const BRAND_PURPLE = '#844ef1';
const LAUNCH_DISCOUNT_LABEL = 'Desconto de lançamento do site';

const entryPackages = [
  {
    id: 'start-1',
    icon: Rocket,
    title: 'Start - Conteúdo',
    family: 'Gravação Única',
    originalPrice: 'R$ 1.500',
    price: 'R$ 997',
    description:
      'Solução enxuta para começar a produzir conteúdo com qualidade e estratégia, sem operação pesada.',
    bullets: [
      'Briefing estratégico rápido para entender marca e objetivo',
      '4 roteiros curtos criados pela SOMA',
      '4 Carrosséis estratégicos',
      'Gravação otimizada com limite de 1h30',
      'Edição dos 4 vídeos prontos para publicação',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero começar',
    link: '/contato',
  },
  {
    id: 'start-2',
    icon: Plus,
    title: 'Start Plus - Conteúdo',
    family: 'Gravação Única',
    originalPrice: 'R$ 3.500',
    price: 'R$ 2.670',
    description:
      'Estrutura mais completa para validar conteúdo com qualidade e ganhar presença digital.',
    bullets: [
      'Briefing estratégico completo com análise de objetivo',
      '6 roteiros curtos criados pela SOMA',
      '4 Carrosséis + 4 criativos estáticos',
      'Gravação otimizada com limite de 2 horas',
      'Edição dos 6 vídeos prontos para publicação',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero começar',
    link: '/contato',
  },
];

const editorialPlans = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Editoria Essencial',
    family: 'Conteúdo (Editoria Mensal)',
    originalPrice: 'R$ 8.500/mês',
    price: 'R$ 4.985/mês',
    description:
      'Estrutura mensal para marca que precisa de consistência, posicionamento e produção profissional.',
    bullets: [
      '8 vídeos curtos (vertical)',
      '8 carrosséis estratégicos',
      '4 estáticos (propaganda ou conteúdo)',
      'Projeção de vendas e alcance (base essencial)',
      'Resultado semanal e direcionamento de curto prazo',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero esse plano',
    link: '/contato',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Editoria PRO',
    family: 'Conteúdo (Editoria Mensal)',
    originalPrice: 'R$ 12.500/mês',
    price: 'R$ 8.470/mês',
    description:
      'Operação editorial completa para acelerar crescimento com conteúdo, estratégia e performance.',
    bullets: [
      '12 vídeos curtos (vertical)',
      '12 carrosséis estratégicos',
      '4 estáticos (propaganda ou conteúdo)',
      'Marketing 360 completo + SWOT',
      'Tráfego pago com otimização contínua',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero esse plano',
    link: '/contato',
  },
];

const podcastPlans = [
  {
    id: 3,
    icon: Mic,
    title: 'Podcast Básico',
    family: 'Conteúdo (Editoria Mensal)',
    originalPrice: 'R$ 5.000/mês',
    price: 'R$ 3.982/mês',
    description:
      'Formato ideal para começar com podcast profissional, rotina clara e presença consistente.',
    bullets: [
      '1 diária de gravação com estrutura completa',
      '3 episódios completos por mês',
      'Até 2 participantes',
      'Calendário de publicação organizado',
      'Cortes básicos inclusos',
      'Cortes profissionais como upgrade',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero esse plano',
    link: '/contato',
  },
  {
    id: 4,
    icon: Radio,
    title: 'Podcast Intermediário',
    family: 'Conteúdo (Editoria Mensal)',
    originalPrice: 'R$ 7.500/mês',
    price: 'R$ 5.950/mês',
    description:
      'Modelo recorrente para manter frequência semanal, ganhar volume e ampliar autoridade.',
    bullets: [
      '1 diária de gravação com estrutura completa',
      'Até 5 episódios completos por mês',
      'Até 4 participantes',
      'Organização editorial e distribuição mensal',
      'Cortes básicos inclusos',
      'Cortes profissionais como upgrade',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero esse plano',
    link: '/contato',
  },
  {
    id: 5,
    icon: Crown,
    title: 'Podcast PRO',
    family: 'Conteúdo (Editoria Mensal)',
    originalPrice: 'R$ 13.000/mês',
    price: 'R$ 9.989/mês',
    description:
      'Escala de produção para ocupar espaço no digital com alto volume e padrão premium de captação.',
    bullets: [
      '2 diárias de gravação com estrutura completa',
      'Até 10 episódios completos por mês',
      'Até 4 participantes',
      'Calendário estratégico com execução contínua',
      'Cortes básicos inclusos',
      'Cortes profissionais como upgrade',
    ],
    color: BRAND_PURPLE,
    cta: 'Quero esse plano',
    link: '/contato',
  },
];

const cutAddons = [
  {
    id: 1,
    icon: Scissors,
    title: '15 Cortes Básicos',
    family: 'Adicional de Pacote',
    price: 'Incluso',
    description:
      'Volume com consistência para presença diária em Reels, Shorts e TikTok.',
    color: BRAND_PURPLE,
  },
  {
    id: 2,
    icon: Scissors,
    title: '30 Cortes Profissionais',
    family: 'Adicional de Pacote',
    price: 'R$ 900',
    description:
      'Mais frequência para manter distribuição contínua ao longo do mês.',
    color: BRAND_PURPLE,
  },
  {
    id: 3,
    icon: Scissors,
    title: '50 Cortes Profissionais',
    family: 'Adicional de Pacote',
    price: 'R$ 1.500',
    description:
      'Operação intensa de cortes para marcas com alto ritmo de conteúdo.',
    color: BRAND_PURPLE,
  },
  {
    id: 4,
    icon: Sparkles,
    title: '4 Cortes Premium',
    family: 'Adicional de Pacote',
    price: 'R$ 1.400',
    description:
      'Cortes de impacto com acabamento superior para retenção e autoridade.',
    color: BRAND_PURPLE,
  },
  {
    id: 5,
    icon: Sparkles,
    title: '10 Cortes Premium',
    family: 'Adicional de Pacote',
    price: 'R$ 3.000',
    description:
      'Bloco premium para escalar percepção de valor e performance.',
    color: BRAND_PURPLE,
  },
];

const customProjects = [
  {
    id: 6,
    icon: Bot,
    title: 'Automação & Sistemas',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 5.000/projeto',
    description:
      'Chatbots, integrações, aplicativos internos e automações personalizadas para escalar com eficiência.',
    bullets: [
      'Chatbots para Instagram, WhatsApp e web',
      'Integrações com CRM, e-mail e sistemas internos',
      'Aplicativos internos e dashboards sob medida',
      'Automação de processos de atendimento e vendas',
      'Validação, ajustes e acompanhamento pós-implementação',
    ],
    color: BRAND_PURPLE,
    cta: 'Solicitar proposta',
    link: '/contato',
  },
  {
    id: 7,
    icon: Globe,
    title: 'Sites & Experiências Digitais',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 5.000/projeto',
    description:
      'Site institucional ou de conversão com estratégia, design de marca e estrutura pronta para crescimento.',
    bullets: [
      'Diagnóstico e planejamento estratégico',
      'Arquitetura da informação e jornada do usuário',
      'Design personalizado sem template genérico',
      'Desenvolvimento responsivo e otimizado',
      'Testes, publicação e orientação de uso',
    ],
    color: BRAND_PURPLE,
    cta: 'Solicitar proposta',
    link: '/contato',
  },
  {
    id: 8,
    icon: Clapperboard,
    title: 'Filmmaker Audiovisual',
    family: 'Projeto Sob Medida',
    price: 'A partir de R$ 3.000/projeto',
    description:
      'Projeto audiovisual completo com conceito, direção, captação e finalização profissional de alto nível.',
    bullets: [
      'Diagnóstico criativo e estratégico do projeto',
      'Conceito criativo, direção e narrativa',
      'Pré-produção, captação e direção em cena',
      'Pós-produção com cor, som e acabamento premium',
      'Entrega estratégica para marca, campanha ou vendas',
    ],
    color: BRAND_PURPLE,
    cta: 'Solicitar proposta',
    link: '/contato',
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

export function Pacotes() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredPackageIcon, setHoveredPackageIcon] = useState<number | null>(null);

  const [hoveredAddon, setHoveredAddon] = useState<number | null>(null);
  const [hoveredAddonIcon, setHoveredAddonIcon] = useState<number | null>(null);
  const [addonTopRowCount, setAddonTopRowCount] = useState(4);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredProjectIcon, setHoveredProjectIcon] = useState<number | null>(null);

  useEffect(() => {
    const getTopRowCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) return 4;
      if (width >= 920) return 3;
      if (width >= 620) return 2;
      return 1;
    };

    const onResize = () => setAddonTopRowCount(getTopRowCount());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

      <section
        className="container relative z-10"
        style={{ paddingTop: '84px', paddingBottom: '70px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}
        >
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '12px' }}>
            PACOTES SOMA
          </div>
          <h1
            style={{
              fontSize: '52px',
              lineHeight: 1.05,
              margin: '0 0 18px',
              color: 'var(--white)',
            }}
          >
            Estrutura comercial completa para
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
              }}
            >
              crescer com a SOMA
            </span>
          </h1>
          <p
            style={{
              margin: '0 auto',
              color: 'var(--muted)',
              fontSize: '18px',
              maxWidth: '760px',
            }}
          >
            Pacotes mensais e projetos sob medida para unir conteúdo, presença digital,
            performance e tecnologia em uma operação de crescimento contínuo.
          </p>
        </motion.div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '74px' }}>
        <SectionHeader
          kicker="PACOTES DE ENTRADA"
          title="Gravação única para começar"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {entryPackages.map((plan, index) => (
            <PackageCard
              key={plan.id}
              item={plan}
              index={index}
              topRowCount={2}
              hovered={hoveredPackage}
              setHovered={setHoveredPackage}
              hoveredIcon={hoveredPackageIcon}
              setHoveredIcon={setHoveredPackageIcon}
            />
          ))}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '74px' }}>
        <SectionHeader
          kicker="EDITORIA"
          title="Pacotes de conteúdo mensal"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {editorialPlans.map((plan, index) => (
            <PackageCard
              key={plan.id}
              item={plan}
              index={index}
              topRowCount={2}
              hovered={hoveredPackage}
              setHovered={setHoveredPackage}
              hoveredIcon={hoveredPackageIcon}
              setHoveredIcon={setHoveredPackageIcon}
            />
          ))}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '74px' }}>
        <SectionHeader
          kicker="PODCAST & ENTREVISTAS"
          title="Planos mensais de podcast"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {podcastPlans.map((plan, index) => (
            <PackageCard
              key={plan.id}
              item={plan}
              index={index}
              topRowCount={3}
              hovered={hoveredPackage}
              setHovered={setHoveredPackage}
              hoveredIcon={hoveredPackageIcon}
              setHoveredIcon={setHoveredPackageIcon}
            />
          ))}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '74px' }}>
        <SectionHeader
          kicker="ADICIONAIS PARA PODCAST"
          title="Cortes"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
            alignItems: 'stretch',
          }}
        >
          {cutAddons.map((addon, index) => (
            <AddonCard
              key={addon.id}
              item={addon}
              index={index}
              topRowCount={addonTopRowCount}
              hovered={hoveredAddon}
              setHovered={setHoveredAddon}
              hoveredIcon={hoveredAddonIcon}
              setHoveredIcon={setHoveredAddonIcon}
            />
          ))}

          <motion.div
            className="cuts-explainer-note"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              alignSelf: 'center',
              minWidth: 0,
              paddingRight: '12px',
            }}
          >
            <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
              COMO ESCOLHER
            </div>
            <h3
              style={{
                margin: '0 0 14px',
                fontSize: '34px',
                lineHeight: 1.08,
                color: 'var(--white)',
              }}
            >
              Qual a diferença entre Cortes Profissionais e Premium?
            </h3>
            <p
              style={{
                margin: '0 0 10px',
                color: 'var(--muted)',
                fontSize: '16px',
                lineHeight: 1.65,
              }}
            >
              <span style={{ color: 'var(--purple-2)', fontWeight: 700 }}>Cortes Profissionais:</span> foco em volume,
              consistência e frequência para manter presença diária com agilidade.
            </p>
            <p
              style={{
                margin: 0,
                color: 'var(--muted)',
                fontSize: '16px',
                lineHeight: 1.65,
              }}
            >
              <span style={{ color: 'var(--purple-2)', fontWeight: 700 }}>Cortes Premium:</span> foco em impacto,
              retenção e autoridade, com edição mais forte e acabamento superior para maior performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '84px' }}>
        <SectionHeader
          kicker="PROJETOS SOB MEDIDA"
          title="Automação, sites e audiovisual"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {customProjects.map((project, index) => (
            <PackageCard
              key={project.id}
              item={project}
              index={index}
              topRowCount={3}
              hovered={hoveredProject}
              setHovered={setHoveredProject}
              hoveredIcon={hoveredProjectIcon}
              setHoveredIcon={setHoveredProjectIcon}
            />
          ))}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '110px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            padding: '48px',
            borderRadius: '16px',
            border: '1px solid rgba(140,82,255,0.2)',
            background: 'linear-gradient(135deg, rgba(140,82,255,0.08), rgba(167,123,255,0.04))',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
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
              Quer montar o pacote ideal para o seu momento?
            </h3>
            <p
              style={{
                margin: '0 auto 26px',
                maxWidth: '700px',
                color: 'var(--muted)',
                fontSize: '16px',
              }}
            >
              A SOMA cruza objetivo, orçamento e fase do negócio para estruturar um plano de
              entrega claro, escalável e orientado por resultado.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contato">
                <motion.button
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: '16px', padding: '14px 30px' }}
                >
                  Falar com a SOMA
                </motion.button>
              </Link>

              <Link to="/servicos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    padding: '14px 30px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Ver serviços
                  <ArrowUpRight size={16} />
                </motion.button>
              </Link>
            </div>
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

            .cuts-explainer-note {
              grid-column: span 3;
            }

            @media (max-width: 1200px) {
              .cuts-explainer-note {
                grid-column: span 2;
              }
            }

            @media (max-width: 900px) {
              .cuts-explainer-note {
                grid-column: span 1;
                padding-right: 0;
              }
            }
          `,
        }}
      />
    </div>
  );
}

function SectionHeader({ kicker, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: '26px' }}
    >
      <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
        {kicker}
      </div>
      <h2 style={{ margin: 0, color: 'var(--white)', fontSize: '36px' }}>{title}</h2>
    </motion.div>
  );
}

function PackageCard({
  item,
  index,
  topRowCount,
  hovered,
  setHovered,
  hoveredIcon,
  setHoveredIcon,
}) {
  const Icon = item.icon;
  const isTopRow = index < topRowCount;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: hovered === item.id ? 1.05 : 1,
        rotateY: hovered === item.id ? 5 : 0,
      }}
      transition={{
        duration: hovered === item.id ? 0.2 : 0.12,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setHovered(item.id)}
      onHoverEnd={() => setHovered(null)}
      whileHover={isTopRow ? { y: -10, z: 30 } : { y: 0, z: 30 }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: hovered === item.id ? `1px solid ${item.color}50` : '1px solid var(--glass-border)',
        background:
          hovered === item.id
            ? `linear-gradient(180deg, ${item.color}15, rgba(255,255,255,0.02))`
            : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        boxShadow:
          hovered === item.id
            ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${item.color}20`
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
      <motion.div
        onHoverStart={() => setHoveredIcon(item.id)}
        onHoverEnd={() => setHoveredIcon(null)}
        animate={{ rotate: hoveredIcon === item.id ? 360 : 0, scale: hoveredIcon === item.id ? 1.1 : 1 }}
        transition={{
          rotate: { duration: 0.8, ease: 'easeInOut' },
          scale: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background:
            hovered === item.id
              ? `linear-gradient(135deg, ${item.color}ff, ${item.color}cc)`
              : `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          marginTop: 0,
          boxShadow:
            hovered === item.id
              ? `0 12px 32px ${item.color}60, 0 0 20px ${item.color}40`
              : `0 8px 24px ${item.color}30`,
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
            inset: 0,
            borderRadius: '12px',
            background: `radial-gradient(circle at center, ${item.color}60 0%, transparent 70%)`,
            filter: 'blur(8px)',
            opacity: hovered === item.id ? 0.8 : 0.3,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />

        <motion.div
          animate={{ y: hovered === item.id ? [-2, 2, -2] : 0 }}
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
            color="#0b0612"
            strokeWidth={2.4}
            style={{
              filter: hovered === item.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            background: `radial-gradient(circle at 50% 50%, transparent 30%, ${item.color}20 70%)`,
            opacity: hovered === item.id ? 1 : 0,
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
          {item.title}
        </h3>
        <div
          style={{
            marginBottom: '12px',
            color: 'var(--purple-2)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.7px',
            minHeight: '16px',
          }}
        >
          {item.family}
        </div>
        <PriceDisplay item={item} />
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
        {item.description}
      </p>

      <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none' }}>
        {item.bullets.map((bullet, bulletIndex) => (
          <motion.li
            key={bullet}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.4 + bulletIndex * 0.05 }}
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
                background: item.color,
                boxShadow: `0 0 8px ${item.color}`,
                flexShrink: 0,
              }}
            />
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>

      {item.cta && item.link && (
        <Link to={item.link} style={{ marginTop: 'auto' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
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
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {item.cta}
            <ArrowUpRight size={16} />
          </motion.button>
        </Link>
      )}
    </motion.article>
  );
}

function AddonCard({
  item,
  index,
  topRowCount,
  hovered,
  setHovered,
  hoveredIcon,
  setHoveredIcon,
}) {
  const Icon = item.icon;
  const isTopRow = index < topRowCount;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: hovered === item.id ? 1.05 : 1,
        rotateY: hovered === item.id ? 5 : 0,
      }}
      transition={{
        duration: hovered === item.id ? 0.2 : 0.12,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setHovered(item.id)}
      onHoverEnd={() => setHovered(null)}
      whileHover={isTopRow ? { y: -10, z: 30 } : { y: 0, z: 30 }}
      style={{
        position: 'relative',
        borderRadius: '14px',
        border: hovered === item.id ? `1px solid ${item.color}50` : '1px solid var(--glass-border)',
        background:
          hovered === item.id
            ? `linear-gradient(180deg, ${item.color}15, rgba(255,255,255,0.02))`
            : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        boxShadow:
          hovered === item.id
            ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${item.color}20`
            : '0 8px 20px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        transformOrigin: isTopRow ? 'center center' : 'center top',
      }}
    >
      <motion.div
        onHoverStart={() => setHoveredIcon(item.id)}
        onHoverEnd={() => setHoveredIcon(null)}
        animate={{ rotate: hoveredIcon === item.id ? 360 : 0, scale: hoveredIcon === item.id ? 1.1 : 1 }}
        transition={{
          rotate: { duration: 0.8, ease: 'easeInOut' },
          scale: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background:
            hovered === item.id
              ? `linear-gradient(135deg, ${item.color}ff, ${item.color}cc)`
              : `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '14px',
          boxShadow:
            hovered === item.id
              ? `0 12px 32px ${item.color}60, 0 0 20px ${item.color}40`
              : `0 8px 24px ${item.color}30`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '10px',
            background: `radial-gradient(circle at center, ${item.color}60 0%, transparent 70%)`,
            filter: 'blur(8px)',
            opacity: hovered === item.id ? 0.8 : 0.3,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />

        <motion.div
          animate={{ y: hovered === item.id ? [-2, 2, -2] : 0 }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse',
            },
          }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Icon
            size={22}
            color="#0b0612"
            strokeWidth={2.3}
            style={{
              filter: hovered === item.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>
      </motion.div>

      <h3
        style={{
          margin: '0 0 4px',
          color: 'var(--white)',
          fontSize: '20px',
          lineHeight: 1.15,
          minHeight: '46px',
        }}
      >
        {item.title}
      </h3>

      <div
        style={{
          marginBottom: '12px',
          color: 'var(--purple-2)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.7px',
        }}
      >
        {item.family}
      </div>

      <div
        style={{
          fontSize: '26px',
          lineHeight: 1,
          fontWeight: 900,
          marginBottom: '12px',
          background: `linear-gradient(135deg, ${item.color}, ${item.color}d8)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {item.price}
      </div>

      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px', lineHeight: 1.55 }}>
        {item.description}
      </p>
    </motion.article>
  );
}
