import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Clapperboard,
  FileText,
  Globe,
  Mic,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

const BRAND_PURPLE = '#844ef1';
const BRAND_GRADIENT = 'linear-gradient(135deg, #844ef1, #a77bff)';

export function Servicos() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Design & ID Visual',
      family: 'Branding',
      description:
        'Criamos identidade visual do zero ou reposicionamos marcas com direção estratégica, consistência e memória visual.',
      items: [
        'Diagnóstico de marca e mercado',
        'Posicionamento estratégico e rebranding',
        'Logotipo e variações de aplicação',
        'Paleta, tipografia e elementos visuais',
        'Brandbook e kit de aplicações iniciais',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 2,
      icon: FileText,
      title: 'Editoria de Conteúdo',
      family: 'Produção Mensal',
      description:
        'Operação editorial com vídeos curtos, carrosséis e criativos pensados para autoridade, alcance e conversão.',
      items: [
        'Roteiro estratégico por objetivo',
        'Gravação profissional em diária otimizada',
        'Edição para Reels, Shorts, TikTok e YouTube',
        'Carrosséis e criativos com storytelling',
        'Performance orientada por dados e testes',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 3,
      icon: BarChart3,
      title: 'Marketing 360 & Tráfego Pago',
      family: 'Valor e Vendas',
      description:
        'Conectamos estratégia, projeções e mídia paga para transformar conteúdo em crescimento mensurável.',
      items: [
        'Projeções de vendas e alcance',
        'Análise SWOT aplicada ao negócio',
        'Campanhas em Meta, Google, TikTok e YouTube',
        'Otimização contínua de CTR, CPC e ROAS',
        'Relatórios semanais e plano para próximos meses',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 4,
      icon: Mic,
      title: 'Podcast & Entrevistas',
      family: 'Presença com Intenção',
      description:
        'Gravamos o podcast com estrutura profissional, organizamos episódios e preparamos a distribuição do mês.',
      items: [
        'Captação profissional no local do cliente',
        'Produção mensal de episódios completos',
        'Organização editorial e calendário de publicação',
        'Entrega pronta para YouTube, Spotify e redes',
        'Cortes básicos inclusos e cortes premium como upgrade',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 5,
      icon: Clapperboard,
      title: 'Filmmaker Audiovisual',
      family: 'Projeto Sob Medida',
      description:
        'Transformamos ideia em projeto audiovisual completo, com conceito criativo, direção e finalização de alto nível.',
      items: [
        'Diagnóstico criativo e direção de projeto',
        'Roteiro e narrativa com objetivo claro',
        'Pré-produção, captação e direção em cena',
        'Pós-produção com color, áudio e acabamento',
        'Entrega estratégica para campanhas e posicionamento',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 6,
      icon: Bot,
      title: 'Automação & Sistemas',
      family: 'Escala Operacional',
      description:
        'Desenhamos e implementamos automações e sistemas personalizados para reduzir retrabalho e acelerar resultado.',
      items: [
        'Chatbots para Instagram, WhatsApp e web',
        'Integrações com CRM, e-mail e ferramentas internas',
        'Aplicativos internos e dashboards sob medida',
        'Automação de processos de atendimento e vendas',
        'Validação, ajustes e acompanhamento pós-entrega',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
    {
      id: 7,
      icon: Globe,
      title: 'Sites & Experiências Digitais',
      family: 'Presença Web Estratégica',
      description:
        'Criamos sites institucionais e de conversão com design de marca, estrutura clara e base para crescimento digital.',
      items: [
        'Diagnóstico, arquitetura e jornada do usuário',
        'Design personalizado alinhado ao branding',
        'Desenvolvimento responsivo e otimizado',
        'Estrutura para leads, vendas e posicionamento',
        'Publicação com orientação e evolução contínua',
      ],
      color: BRAND_PURPLE,
      gradient: BRAND_GRADIENT,
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Operação integrada',
      description: 'Estratégia, produção, mídia e tecnologia conectadas em uma única operação.',
      color: BRAND_PURPLE,
    },
    {
      icon: Sparkles,
      title: 'Padrão SOMA',
      description: 'Design, narrativa e acabamento consistentes em todas as frentes de entrega.',
      color: BRAND_PURPLE,
    },
    {
      icon: Zap,
      title: 'Evolução contínua',
      description: 'Ajustes orientados por dados para manter crescimento previsível no digital.',
      color: BRAND_PURPLE,
    },
  ];

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
            SERVIÇOS SOMA
          </div>
          <h1 style={{ fontSize: '52px', lineHeight: 1.05, margin: '0 0 18px', color: 'var(--white)' }}>
            Estratégia, conteúdo e tecnologia para
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
              }}
            >
              crescer com consistência
            </span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '760px', margin: 0 }}>
            Da identidade da marca até a entrega final, cada serviço da SOMA foi estruturado para gerar valor,
            percepção de autoridade e resultado real.
          </p>
        </motion.div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '76px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              hoveredService={hoveredService}
              setHoveredService={setHoveredService}
              hoveredIcon={hoveredIcon}
              setHoveredIcon={setHoveredIcon}
            />
          ))}

          <motion.div
            className="services-delivery-note"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              alignSelf: 'center',
              paddingRight: '20px',
              minWidth: 0,
            }}
          >
            <div className="kicker" style={{ fontSize: '12px', marginBottom: '10px' }}>
              COMO ENTREGAMOS
            </div>
            <h3 style={{ margin: '0 0 14px', fontSize: '36px', lineHeight: 1.08, color: 'var(--white)' }}>
              Processo claro, execução forte e melhoria contínua
            </h3>
            <p style={{ margin: '0 0 14px', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.65 }}>
              Na SOMA, cada entrega nasce com objetivo definido, cronograma realista e padrão visual consistente.
              Você sabe o que será feito, quando será entregue e como isso contribui para crescimento de marca e vendas.
            </p>
            <p style={{ margin: 0, color: 'var(--muted)', fontSize: '16px', lineHeight: 1.65 }}>
              Não entregamos apenas arquivos. Entregamos direção estratégica, produção com qualidade e ajustes orientados
              por dados para o seu negócio evoluir com previsibilidade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container relative z-10" style={{ paddingBottom: '72px' }}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid rgba(140,82,255,0.2)',
            background: 'linear-gradient(180deg, rgba(140,82,255,0.06), rgba(255,255,255,0.01))',
            marginBottom: '56px',
          }}
        >
          <h3 style={{ color: 'var(--white)', margin: '0 0 22px', fontSize: '30px', textAlign: 'center' }}>
            Por que esse modelo funciona
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: hoveredBenefit === index ? 1.05 : 1,
                    y: hoveredBenefit === index ? -8 : 0,
                  }}
                  transition={{
                    duration: hoveredBenefit === index ? 0.2 : 0.12,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  onHoverStart={() => setHoveredBenefit(index)}
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
                    animate={{
                      rotate: hoveredBenefit === index ? 360 : 0,
                      scale: hoveredBenefit === index ? 1.1 : 1,
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
                        hoveredBenefit === index
                          ? `linear-gradient(135deg, ${benefit.color}ff, ${benefit.color}cc)`
                          : `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      boxShadow:
                        hoveredBenefit === index
                          ? `0 12px 32px ${benefit.color}60, 0 0 20px ${benefit.color}40`
                          : `0 8px 24px ${benefit.color}30`,
                    }}
                  >
                    <Icon size={22} color="#0b0612" strokeWidth={2.4} />
                  </motion.div>

                  <h4 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--white)' }}>{benefit.title}</h4>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5 }}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
              Quer montar sua estrutura com a SOMA?
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
              Veja os pacotes ou fale com a gente para montar um plano sob medida com escopo, ritmo e objetivo claros.
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

            .services-delivery-note {
              grid-column: span 2;
            }

            @media (max-width: 1100px) {
              .services-delivery-note {
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

function ServiceCard({ service, index, hoveredService, setHoveredService, hoveredIcon, setHoveredIcon }) {
  const Icon = service.icon;
  const isTopRow = index < 3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: hoveredService === service.id ? 1.05 : 1,
        rotateY: hoveredService === service.id ? 5 : 0,
      }}
      transition={{
        duration: hoveredService === service.id ? 0.2 : 0.12,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setHoveredService(service.id)}
      onHoverEnd={() => setHoveredService(null)}
      whileHover={isTopRow ? { y: -10, z: 30 } : { y: 0, z: 30 }}
      style={{
        position: 'relative',
        padding: '30px',
        borderRadius: '16px',
        background:
          hoveredService === service.id
            ? `linear-gradient(180deg, ${service.color}15, rgba(255,255,255,0.02))`
            : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        border:
          hoveredService === service.id ? `1px solid ${service.color}50` : '1px solid var(--glass-border)',
        boxShadow:
          hoveredService === service.id
            ? `0 24px 56px rgba(0,0,0,0.6), 0 0 36px ${service.color}20`
            : '0 8px 24px rgba(0,0,0,0.35)',
        cursor: 'pointer',
        transition: 'background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease',
        overflow: 'hidden',
        minHeight: '100%',
        transformOrigin: isTopRow ? 'center center' : 'center top',
      }}
    >
      {service.badge && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
            color: '#0b0612',
            fontWeight: 900,
            fontSize: '12px',
            letterSpacing: '0.35px',
            textTransform: 'uppercase',
            padding: '7px 14px',
            borderRadius: '999px',
            boxShadow: '0 10px 24px rgba(140,82,255,0.45)',
            zIndex: 4,
            whiteSpace: 'nowrap',
          }}
        >
          {service.badge}
        </div>
      )}

      <motion.div
        onHoverStart={() => setHoveredIcon(service.id)}
        onHoverEnd={() => setHoveredIcon(null)}
        animate={{ rotate: hoveredIcon === service.id ? 360 : 0, scale: hoveredIcon === service.id ? 1.1 : 1 }}
        transition={{
          rotate: { duration: 0.8, ease: 'easeInOut' },
          scale: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background:
            hoveredService === service.id
              ? `linear-gradient(135deg, ${service.color}ff, ${service.color}cc)`
              : service.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '18px',
          boxShadow:
            hoveredService === service.id
              ? `0 12px 32px ${service.color}60, 0 0 20px ${service.color}40`
              : `0 8px 24px ${service.color}30`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            background: `radial-gradient(circle at center, ${service.color}60 0%, transparent 70%)`,
            filter: 'blur(8px)',
            opacity: hoveredService === service.id ? 0.8 : 0.3,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />

        <motion.div
          animate={{ y: hoveredService === service.id ? [-2, 2, -2] : 0 }}
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
              filter:
                hoveredService === service.id ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            background: `radial-gradient(circle at 50% 50%, transparent 30%, ${service.color}20 70%)`,
            opacity: hoveredService === service.id ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
          }}
        />
      </motion.div>

      <div style={{ marginBottom: '12px' }}>
        <h2 style={{ margin: '0 0 4px', fontSize: '23px', lineHeight: 1.15, color: 'var(--white)' }}>{service.title}</h2>
        <div
          style={{
            marginBottom: '12px',
            color: 'var(--purple-2)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.7px',
          }}
        >
          {service.family}
        </div>
      </div>

      <p style={{ fontSize: '14px', marginBottom: '18px', lineHeight: 1.55, color: 'var(--muted)' }}>
        {service.description}
      </p>

      <ul style={{ color: 'var(--white)', fontSize: '13px', lineHeight: 1.75, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
        {service.items.map((item, i) => (
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
                background: service.color,
                boxShadow: `0 0 8px ${service.color}`,
                flexShrink: 0,
              }}
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
