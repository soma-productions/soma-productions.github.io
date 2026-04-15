import { motion } from 'motion/react';

export function Portfolio() {
  return (
    <div
      className="container portfolio"
      style={{
        minHeight: 'calc(100vh - 200px)',
        paddingTop: '80px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '680px',
          borderRadius: '18px',
          border: '1px solid rgba(140, 82, 255, 0.22)',
          background: '#0e0d13',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(140,82,255,0.12)',
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <div className="kicker" style={{ fontSize: '12px' }}>PÁGINA TEMPORÁRIA</div>
        <h1 style={{ fontSize: '42px', color: 'var(--white)', margin: '12px 0 16px' }}>Portfólio em manutenção</h1>
        <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>
          Estamos atualizando esta página para trazer os novos projetos da SOMA.
          Em breve, o portfólio estará disponível novamente.
        </p>
      </motion.div>
    </div>
  );
}
