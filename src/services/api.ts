import { supabase } from '../services/supabase';

export const getProdutos = async (tableName: string): Promise<any[]> => {
  console.log(`Iniciando a busca de produtos para a tabela: ${tableName}`);

  try {
    console.log('Realizando a consulta ao Supabase...');

    // Realizando a consulta ao Supabase
    const { data, error } = await supabase
      .from(tableName)
      .select('id, name, details, price, imagem_url');

    // Verificação de erros do Supabase
    if (error) {
      console.error(`Erro ao consultar o Supabase para a tabela ${tableName}:`, error.message);
      throw new Error(`Erro ao buscar produtos: ${error.message}`);
    }

    // Se não houver erro, retornar os dados
    console.log(`Produtos encontrados na tabela ${tableName}:`, data);
    return data || [];
  } catch (err: any) {
    // Erro genérico de rede ou outro tipo
    console.error('Erro na requisição:', err.message || err);
    return [];
  }
};
