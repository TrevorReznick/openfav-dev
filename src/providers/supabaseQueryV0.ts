// ~/api/supabaseQuery.js

import { createClient } from '@supabase/supabase-js';
import type { PostgrestFilterBuilder, PostgrestError } from '@supabase/postgrest-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

type QueryOptions = {
    select?: string;
    order?: { column: string; ascending: boolean };
    filter?: (query: PostgrestFilterBuilder<any, any, any>) => PostgrestFilterBuilder<any, any, any>;
    data?: any; // Dati da inserire o aggiornare per le query POST, PUT, UPDATE
    id?: number | string; // ID del record da aggiornare o eliminare per le query PUT, UPDATE, DELETE
};

export enum Operation {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}

export async function supabaseQuery(tableName: string, operation: Operation, options: QueryOptions = {}) {
    try {
        switch (operation) {
            
            case Operation.GET:

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

            case Operation.POST:

                if (!options.data) {
                    throw new Error('Dati richiesti per la query POST');
                }

                const { data: postData, error: postError } = await supabase.from(tableName).insert(options.data);

                if (postError) throw postError;

                return { success: true, data: postData };

            case Operation.PUT:
            case Operation.UPDATE:

                if (!options.id) {
                    throw new Error('ID richiesto per la query PUT/UPDATE');
                }

                if (!options.data) {
                    throw new Error('Dati richiesti per la query PUT/UPDATE');
                }

                const { data: updateData, error: updateError } = await supabase.from(tableName).update(options.data).eq('id', options.id);

                if (updateError) throw updateError;

                return { success: true, data: updateData };

            case Operation.DELETE:

                if (!options.id) {
                    throw new Error('ID richiesto per la query DELETE');
                }

                const { data: deleteData, error: deleteError } = await supabase.from(tableName).delete().eq('id', options.id);

                if (deleteError) throw deleteError;

                return { success: true, data: deleteData };

            default:
                throw new Error('Operazione non supportata');
            }
    } catch (error) {
        console.error('Supabase query error:', error);
        return { success: false, error: (error as PostgrestError).message };
    }
}