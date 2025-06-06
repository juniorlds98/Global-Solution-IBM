export function getDadosDaCidade(cidade) {
  // Mapeamento de estados fictício
  const estados = {
    'sao paulo': 'SP',
    'rio de janeiro': 'RJ',
    'belo horizonte': 'MG',
    'curitiba': 'PR',
  };

  // Dados simulados
  const dados = {
    cidade: cidade.toLowerCase(),
    estado: estados[cidade.toLowerCase()] || '??',
    data: new Date().toISOString().split('T')[0],
    tempo: 'pn',
    min: '17',
    max: '28',
    iuv: '0.0',
    sensor: {
      cidade: cidade.toLowerCase(),
      nivel_da_agua: 70,
      status: 'operando',
      resultado: 'tranquilo'
    }
  };

  return dados;
}