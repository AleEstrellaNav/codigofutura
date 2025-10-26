import { Keypair } from '@stellar/stellar-sdk';

async function crearCuenta() {
  console.log('🔐 Generando tu nuevo par de llaves...\n');
  
  // Generar llaves aleatorias
  const pair = Keypair.random();
  
  console.log('✅ ¡Cuenta creada!\n');
  console.log('📧 PUBLIC KEY (puedes compartir):');
  console.log(pair.publicKey());
  console.log('\n🔑 SECRET KEY (NUNCA COMPARTIR):');
  console.log(pair.secret());
  
  // Fondear con Friendbot
  console.log('\n💰 Fondeando con Friendbot...');
  
  try {
    const response = await fetch(
      `https://friendbot.stellar.org/?addr=${pair.publicKey()}`
    );
    
    const result = await response.json();
    
    if (result.successful || response.ok) {
      console.log('✅ ¡Cuenta fondeada con 10,000 XLM!\n');
      console.log('🔗 Transaction hash:', result.hash);
    }
  } catch (error) {
    console.error('❌ Error al fondear:', error.message);
  }
  
  console.log('\n⚠️  IMPORTANTE: Guarda estas llaves en un lugar seguro\n');
}

//crearCuenta();
for (let i = 1; i <= 5; i++) {
    console.log(`Creando cuenta ${i}...`);
    await crearCuenta();
}