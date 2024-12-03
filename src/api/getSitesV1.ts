// src/api/getSites.js

import { getMain } from '~/scripts/dev/apiBuilderV1'

export async function fetchSites() {
    let categories = []
    let mainData = null
    let error = null    

    try {
        const mainResponse = await getMain();
        if (mainResponse.success) {
            mainData = mainResponse.data;
        } else {
            error = error || mainResponse.error;
        }
    } catch (mainError) {
        error = error || mainError.message || 'Main fetch failed'
    }

    return { categories, mainData, error }
}

