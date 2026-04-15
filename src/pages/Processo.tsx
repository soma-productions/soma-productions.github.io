import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ClipboardList,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Upload,
  Video,
} from 'lucide-react';

const BRAND_PURPLE = '#844ef1';

const processSteps = [
  {
    id: 1,
    icon: ClipboardList,
    title: 'Diagnóstico e Briefing',
    family: 'Imersão estratégica',
    description:
      'Mapeamos com profundidade o cenário atual da marca, os objetivos de curto e médio prazo e o posicionamento desejado para iniciar o projeto com direção estratégica e prioridade correta.',
    items: [
      'Levantamento de contexto da marca e momento do negócio',
      'Mapeamento de metas, indicadores e critérios de sucesso',
      'Análise de público, nicho, concorrência e oportunidades',
      'Definição de escopo, prioridades e foco de execução',
    ],
    color: BRAND_PURPLE,
  },
  {
    id: 2,
    icon: CalendarDays,
    title: 'Planejamento de Entrega',
    family: 'Estrutura operacional',
    description:
      'Transformamos a estratégia em um plano operacional detalhado, com calendário, sequência de entregas, roteiros validados e fluxo definido para cada canal e formato.',
    items: [
      'Planejamento mensal e semanal com marcos de entrega',
      'Roteiros, pautas e validações com objetivo claro',
      'Cronograma de produção, edição e publicação',
      'Definição de canais, formatos e prioridade por etapa',
    ],
    color: BRAND_PURPLE,
  },
  {
    id: 3,
    icon: Video,
    title: 'Produção e Implementação',
    family: 'Execução profissional',
    description:
      'Executamos toda a produção com padrão SOMA, unindo direção criativa, técnica e operacional para transformar planejamento em entregas consistentes e prontas para uso.',
    items: [
      'Captação e produção profissional com direção de cena',
      'Design e materiais criativos alinhados ao branding',
      'Implementação técnica, integrações e ajustes de operação',
      'Direção contínua para manter padrão visual e narrativo',
    ],
    color: BRAND_PURPLE,
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Pós-produção e Validação',
    family: 'Qualidade e consistência',
    description:
      'Refinamos cada material com revisão criteriosa para garantir clareza de mensagem, acabamento profissional e total coerência com o posicionamento da marca.',
    items: [
      'Edição e finalização profissional com padrão uniforme',
      'Revisões com foco em qualidade, legibilidade e impacto',
      'Ajustes de narrativa, ritmo e potencial de performance',
      'Versões finais prontas para cada plataforma',
    ],
    color: BRAND_PURPLE,
  },
  {
    id: 5,
    icon: Upload,
    title: 'Entrega e Otimização',
    family: 'Crescimento contínuo',
    description:
      'Concluímos a entrega com publicação organizada, leitura de resultados e ajustes estratégicos para o próximo ciclo, mantendo evolução contínua e previsível.',
    items: [
      'Entrega organizada, publicada e documentada',
      'Relatórios com leitura objetiva de performance',
      'Recomendações práticas para próximos passos',
      'Otimização contínua da operação e da estratégia',
    ],
    color: BRAND_PURPLE,
  },
];

const processBenefits = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Padrão de qualidade',
    description: 'Cada etapa segue checklist, validação e acabamento para manter consistência em todas as entregas.',
    color: BRAND_PURPLE,
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Comunicação clara',
    description: 'Você acompanha o andamento com alinhamentos objetivos, previsibilidade de prazo e próximas ações.',
    color: BRAND_PURPLE,
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Melhoria contínua',
    description: 'Resultados guiam ajustes de rota para melhorar retenção, conversão e eficiência mês após mês.',
    color: BRAND_PURPLE,
  },
];

export function Processo() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredStepIcon, setHoveredStepIcon] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredBenefitIcon, setHoveredBenefitIcon] = useState<number | null>(null);

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

      <section className="container relative z-10" style={{ paddingTop: '84px', paddingBottom: '68px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '980px' }}
        >
          <div className="kicker" style={{ fontSize: '12px', marginBottom: '12px' }}>
            PROCESSO SOMA
          </div>
          <h1 style={{ fontSize: '52px', lineHeight: 1.05, margin: '0 0 18px', color: 'var(--white)' }}>
            Como transformamos estratégia em
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
              }}
            >
              entrega e resultado
            </span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '760px', margin: 0 }}>
            Esse mapa mostra, etapa por etapa, como a SOMA planeja, executa, valida e otimiza para manter padrão de
            qualidade e crescimento contínuo.
          </p>
        </motion.div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '76px' }}>
        <div className="process-map-track">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-map-node">
              <ProcessStepCard
                step={step}
                index={index}
                hoveredStep={hoveredStep}
                setHoveredStep={setHoveredStep}
                hoveredStepIcon={hoveredStepIcon}
                setHoveredStepIcon={setHoveredStepIcon}
              />

              {index < processSteps.length - 1 && (
                <div className="process-map-connector">
                  <div className="process-map-line-horizontal" />
                  <div className="process-map-line" />
                  <div className="process-map-arrow">
                    <ArrowDown size={14} color="#0b0612" strokeWidth={2.8} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '74px' }}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid rgba(140,82,255,0.2)',
            background: 'linear-gradient(180deg, rgba(140,82,255,0.06), rgba(255,255,255,0.01))',
          }}
        >
          <h3 style={{ color: 'var(--white)', margin: '0 0 22px', fontSize: '30px', textAlign: 'center' }}>
            Como garantimos padrão em todo o processo
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {processBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                hoveredBenefit={hoveredBenefit}
                setHoveredBenefit={setHoveredBenefit}
                hoveredBenefitIcon={hoveredBenefitIcon}
                setHoveredBenefitIcon={setHoveredBenefitIcon}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '108px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
            <h3 style={{ fontSize: '34px', color: 'var(--white)', margin: '0 0 12px' }}>
              Quer iniciar com um processo claro e previsível?
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--muted)',
                marginBottom: '28px',
                maxWidth: '680px',
                margin: '0 auto 28px',
              }}
            >
              A SOMA estrutura, executa e otimiza sua operação para transformar objetivos em entregas reais com padrão
              de qualidade e evolução contínua.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pacotes">
                <motion.button
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: '16px', padding: '14px 30px' }}
                >
                  Ver pacotes
                </motion.button>
              </Link>

              <Link to="/contato">
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
                  Falar com a SOMA
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

            .process-map-track {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0;
              max-width: 1060px;
              margin: 0 auto;
              position: relative;
            }

            .process-map-track::before {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 50%;
              width: 2px;
              transform: translateX(-50%);
              background: linear-gradient(180deg, rgba(140,82,255,0.22), rgba(187,136,255,0.22));
              z-index: 0;
            }

            .process-map-node {
              width: 100%;
              position: relative;
              z-index: 1;
            }

            .process-map-connector {
              height: 86px;
              width: 100%;
              margin: 0 auto;
              position: relative;
              z-index: 0;
            }

            .process-map-line-horizontal {
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              height: 1px;
              transform: translateY(-50%);
              background: linear-gradient(90deg, rgba(140,82,255,0.12), rgba(187,136,255,0.12), rgba(140,82,255,0.12));
            }

            .process-map-line {
              position: absolute;
              left: 50%;
              top: 0;
              bottom: 0;
              width: 2px;
              transform: translateX(-50%);
              background: linear-gradient(180deg, rgba(140,82,255,0.35), rgba(187,136,255,0.35));
            }

            .process-map-arrow {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 22px;
              height: 22px;
              border-radius: 999px;
              background: linear-gradient(135deg, var(--purple), var(--purple-2));
              box-shadow: 0 0 14px rgba(140,82,255,0.45);
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .process-step-content {
              display: grid;
              grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
              gap: 28px;
              align-items: center;
            }

            .process-step-list-box {
              border: 1px solid rgba(255,255,255,0.06);
              background: #121118;
              border-radius: 12px;
              padding: 16px;
              width: 100%;
              max-width: 460px;
              margin: 0 auto;
              align-self: center;
            }

            @media (max-width: 980px) {
              .process-step-content {
                grid-template-columns: 1fr;
                gap: 16px;
              }
            }
          `,
        }}
      />
    </div>
  );
}

function ProcessStepCard({
  step,
  index,
  hoveredStep,
  setHoveredStep,
  hoveredStepIcon,
  setHoveredStepIcon,
}) {
  const Icon = step.icon;

  return (
    <motion.article
      className="process-step-card"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: hoveredStep === step.id ? 1.05 : 1,
        rotateY: hoveredStep === step.id ? 5 : 0,
      }}
      transition={{
        duration: hoveredStep === step.id ? 0.2 : 0.12,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setHoveredStep(step.id)}
      onHoverEnd={() => setHoveredStep(null)}
      whileHover={{ y: -10, z: 30 }}
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '30px',
        borderRadius: '16px',
        background: hoveredStep === step.id ? '#13101d' : '#0e0d13',
        border: hoveredStep === step.id ? `1px solid ${step.color}50` : '1px solid var(--glass-border)',
        boxShadow:
          hoveredStep === step.id
            ? `0 24px 56px rgba(0,0,0,0.6), 0 0 36px ${step.color}20`
            : '0 8px 24px rgba(0,0,0,0.35)',
        cursor: 'pointer',
        transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
        overflow: 'hidden',
      }}
    >
      <div className="process-step-content">
        <div>
          <motion.div
            onHoverStart={() => setHoveredStepIcon(step.id)}
            onHoverEnd={() => setHoveredStepIcon(null)}
            animate={{ rotate: hoveredStepIcon === step.id ? 360 : 0, scale: hoveredStepIcon === step.id ? 1.1 : 1 }}
            transition={{
              rotate: { duration: 0.8, ease: 'easeInOut' },
              scale: { duration: 0.3, ease: 'easeInOut' },
            }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background:
                hoveredStep === step.id
                  ? `linear-gradient(135deg, ${step.color}ff, ${step.color}cc)`
                  : `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow:
                hoveredStep === step.id
                  ? `0 12px 32px ${step.color}60, 0 0 20px ${step.color}40`
                  : `0 8px 24px ${step.color}30`,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '12px',
                background: `radial-gradient(circle at center, ${step.color}60 0%, transparent 70%)`,
                filter: 'blur(8px)',
                opacity: hoveredStep === step.id ? 0.8 : 0.3,
                transition: 'opacity 0.3s ease',
                zIndex: 1,
              }}
            />

            <motion.div
              animate={{ y: hoveredStep === step.id ? [-2, 2, -2] : 0 }}
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
                size={28}
                color="#0b0612"
                strokeWidth={2.4}
                style={{
                  filter: hoveredStep === step.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                  transition: 'filter 0.3s ease',
                }}
              />
            </motion.div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '12px',
                background: `radial-gradient(circle at 50% 50%, transparent 30%, ${step.color}20 70%)`,
                opacity: hoveredStep === step.id ? 1 : 0,
                transition: 'opacity 0.3s ease',
                zIndex: 0,
              }}
            />
          </motion.div>

          <h2 style={{ margin: '0 0 4px', fontSize: '27px', lineHeight: 1.12, color: 'var(--white)' }}>{step.title}</h2>
          <div
            style={{
              marginBottom: '14px',
              color: 'var(--purple-2)',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.7px',
            }}
          >
            {step.family}
          </div>

          <p style={{ fontSize: '16px', margin: 0, lineHeight: 1.65, color: 'var(--muted)' }}>{step.description}</p>
        </div>

        <div className="process-step-list-box">
          <ul style={{ color: 'var(--white)', fontSize: '14px', lineHeight: 1.75, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            {step.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.4 + i * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: step.color,
                    boxShadow: `0 0 8px ${step.color}`,
                    flexShrink: 0,
                  }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function BenefitCard({
  benefit,
  hoveredBenefit,
  setHoveredBenefit,
  hoveredBenefitIcon,
  setHoveredBenefitIcon,
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: hoveredBenefit === benefit.id ? 1.05 : 1,
        y: hoveredBenefit === benefit.id ? -8 : 0,
      }}
      transition={{
        duration: hoveredBenefit === benefit.id ? 0.2 : 0.12,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setHoveredBenefit(benefit.id)}
      onHoverEnd={() => setHoveredBenefit(null)}
      whileHover={{ y: -10, z: 30 }}
      style={{
        padding: '22px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--glass-border)',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <motion.div
        onHoverStart={() => setHoveredBenefitIcon(benefit.id)}
        onHoverEnd={() => setHoveredBenefitIcon(null)}
        animate={{
          rotate: hoveredBenefitIcon === benefit.id ? 360 : 0,
          scale: hoveredBenefitIcon === benefit.id ? 1.1 : 1,
        }}
        transition={{
          rotate: { duration: 0.8, ease: 'easeInOut' },
          scale: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background:
            hoveredBenefit === benefit.id
              ? `linear-gradient(135deg, ${benefit.color}ff, ${benefit.color}cc)`
              : `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
          boxShadow:
            hoveredBenefit === benefit.id
              ? `0 12px 32px ${benefit.color}60, 0 0 20px ${benefit.color}40`
              : `0 8px 24px ${benefit.color}30`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '10px',
            background: `radial-gradient(circle at center, ${benefit.color}60 0%, transparent 70%)`,
            filter: 'blur(8px)',
            opacity: hoveredBenefit === benefit.id ? 0.8 : 0.3,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />

        <motion.div
          animate={{ y: hoveredBenefit === benefit.id ? [-2, 2, -2] : 0 }}
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
            strokeWidth={2.4}
            style={{
              filter: hoveredBenefit === benefit.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>
      </motion.div>

      <h4 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--white)' }}>{benefit.title}</h4>
      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5 }}>{benefit.description}</p>
    </motion.div>
  );
}
