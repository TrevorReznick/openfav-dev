// file: src/utils/api.ts

import { createClient } from '@supabase/supabase-js';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

type QueryOptions = {
  select?: string;
  order?: { column: string; ascending: boolean };
  filter?: (query: PostgrestFilterBuilder<any, any, any>) => PostgrestFilterBuilder<any, any, any>;
};

async function supabaseQuery(tableName: string, options: QueryOptions = {}) {
  try {
    let query = supabase.from(tableName).select(options.select || '*');

    if (options.filter) {
      query = options.filter(query);
    }

    if (options.order) {
      query = query.order(options.order.column, { ascending: options.order.ascending });
    }

    const { data, error } = await query;

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error('Supabase query error:', error);
    return { success: false, error: (error as Error).message };
  }
}

// Funzioni specifiche che utilizzano supabaseQuery

export async function sendData(data: PostData) {
  try {
    const { success, data: result, error } = await supabaseQuery('main', {
      filter: (query) => query.insert(data)
    });

    if (!success) throw new Error(error);

    return { success: true, data: result };
  } catch (error) {
    console.error('There was a problem with the sendData operation:', error);
    return { success: false, error: (error as Error).message };
  }
}

export async function updateData(data: SubMainFormData) {
  try {
    const { success, data: result, error } = await supabaseQuery('update_sub_table', {
      filter: (query) => query.upsert(data)
    });

    if (!success) throw new Error(error);

    return { success: true, data: result };
  } catch (error) {
    console.error('There was a problem with the update operation:', error);
    return { success: false, error: (error as Error).message };
  }
}

export async function getCategories() {
  return supabaseQuery('main_table', {
    select: 'id, name',
    order: { column: 'name', ascending: true }
  });
}

export async function getInfo(url: string) {
  return supabaseQuery('main_table', {
    select: 'id, url, description, name, title, logo, image, icon',
    filter: (query) => query.eq('url', url)
  });
}

export async function getItem(id: number) {
  return supabaseQuery('main_table', {
    select: 'id, url, description, name, title, logo, image, icon',
    filter: (query) => query.eq('id', id)
  });
}

// Aggiungi altre funzioni specifiche secondo necessità...

// Tipi
type PostData = {
  // Definisci la struttura dei tuoi dati qui
};

type SubMainFormData = {
  // Definisci la struttura dei tuoi dati qui
};