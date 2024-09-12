import { supabase } from './supabase';

export const getProdutos = async (): Promise<any[]> => {
  console.log('Iniciando a busca de produtos...');

  try {
    // Log da consulta ao Supabase
    console.log('Realizando a consulta ao Supabase...');

    const { data, error } = await supabase
      .from('nhoque')
      .select('id,name,price,imagem_url');

    // Log da resposta do Supabase
    console.log('Resposta do Supabase:', { data, error });

    if (error) {
      console.error('Erro ao buscar produtos:', error.message);
      return [];
    }

    console.log('Produtos encontrados:', data);
    return data || [];
  } catch (err) {
    console.error('Erro na requisição:', err);
    return [];
  }
};
