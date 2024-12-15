import { createClient } from '@supabase/supabase-js'
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

type QueryOptions = {

    select?: string
    order?: { column: string; ascending: boolean }
    filter?: (query: PostgrestFilterBuilder<any, any, any>) => PostgrestFilterBuilder<any, any, any>
}
  
export async function supabaseQuery(tableName: string, options: QueryOptions = {}) {
    try {
        let query = supabase.from(tableName).select(options.select || '*')
  
        if (options.filter) {
            query = options.filter(query);
        }
    
        if (options.order) {
            query = query.order(options.order.column, { ascending: options.order.ascending })
        }
    
        const { data, error } = await query
    
        if (error) throw error
    
        return { success: true, data }
    } catch (error) {

        console.error('Supabase query error:', error);
        return { success: false, error: (error as Error).message }
        
    }
}