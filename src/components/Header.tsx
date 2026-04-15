import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [hoveredLogo, setHoveredLogo] = useState(false);

  return (
    <header>
      <div className="container nav">
        <Link to="/" className="brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* LOGO HOME com animações */}
            <motion.div
              initial={false}
              animate={{
                scale: hoveredLogo ? 1.05 : 1,
                rotate: hoveredLogo ? [0, -5, 5, -5, 0] : 0,
                y: hoveredLogo ? [-2, 2, -2] : 0
              }}
              transition={{
                scale: { duration: 0.2, ease: "easeInOut" },
                rotate: { 
                  duration: 0.6, 
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1]
                },
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "reverse" 
                }
              }}
              onHoverStart={() => setHoveredLogo(true)}
              onHoverEnd={() => setHoveredLogo(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                padding: '4px',
                borderRadius: '12px',
                background: hoveredLogo 
                  ? 'radial-gradient(circle at center, rgba(140, 82, 255, 0.15) 0%, transparent 70%)' 
                  : 'transparent',
                transition: 'background 0.3s ease'
              }}
            >
              <img 
                src="https://i.imgur.com/Nwsty0Y.png" 
                alt="SOMA Marketing" 
                style={{ 
                  height: '52px',
                  width: 'auto',
                  filter: hoveredLogo 
                    ? 'drop-shadow(0 4px 12px rgba(140, 82, 255, 0.3))' 
                    : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))',
                  transition: 'all 0.3s ease',
                  borderRadius: '8px'
                }}
              />
            </motion.div>
            
            <div>
              <strong style={{ 
                fontSize: '18px',
                background: 'linear-gradient(135deg, var(--purple), var(--purple-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                SOMA
              </strong>
              <br />
              <small style={{ 
                color: 'var(--muted)',
                fontSize: '13px',
                marginTop: '2px',
                display: 'block'
              }}>
                linhas editoriais • podcasts • performance
              </small>
            </div>
          </div>
        </Link>
        
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          {[
            { path: '/servicos', label: 'Serviços' },
            { path: '/pacotes', label: 'Pacotes' },
            { path: '/processo', label: 'Processo' },
            { path: '/portfolio', label: 'Portfólio' },
            { path: '/contato', label: 'Contato' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <Link 
                key={item.path}
                to={item.path}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                  position: 'relative', 
                  textDecoration: 'none',
                  color: isActive ? 'var(--purple)' : 'var(--muted)',
                  marginLeft: '18px',
                  transition: 'color 0.2s ease',
                }}
              >
                {/* Texto com animação de levitação */}
                <motion.span
                  initial={false}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    y: isHovered ? -2 : 0
                  }}
                  transition={{
                    scale: { duration: 0.2, ease: "easeInOut" },
                    y: { duration: 0.2, ease: "easeInOut" }
                  }}
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Efeito de fundo animado no hover */}
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '-8px',
                      right: '-8px',
                      bottom: '-6px',
                      background: 'rgba(140, 82, 255, 0.1)',
                      borderRadius: '8px',
                      zIndex: 1
                    }}
                  />
                )}
                
                {/* Linha de sublinhado animada para página ativa */}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    initial={false}
                    animate={{
                      scaleX: isHovered ? 1.1 : 1,
                      y: isHovered ? 2 : 0
                    }}
                    transition={{
                      scaleX: { duration: 0.2, ease: "easeInOut" },
                      y: { duration: 0.2, ease: "easeInOut" }
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '-4px',
                      right: '-4px',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--purple), var(--purple-2))',
                      borderRadius: '2px',
                      transformOrigin: 'center',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        <div>
          <Link to="/contato">
            <motion.button 
              className="cta-btn"
              initial={false}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Efeito de partículas no hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1, 1.5],
                  transition: { 
                    duration: 0.6,
                    times: [0, 0.5, 1]
                  }
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              />
              
              Marcar Reunião
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
}