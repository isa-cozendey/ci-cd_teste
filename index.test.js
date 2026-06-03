const assert = require('assert');
const somar = require('./index');

// Teste 1: Deve somar corretamente
try {
    assert.strictEqual(somar(2, 3), 5);
    console.log("✅ Teste passou: 2 + 3 é igual a 5");
} catch (error) {
    console.error("❌ Teste falhou:", error.message);
    process.exit(1); // Força o processo a falhar para o GitHub Actions notar
}