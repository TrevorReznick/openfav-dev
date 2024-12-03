// src/api/getSites.js

import { getCategories, getMain } from '~/scripts/dev/apiBuilderV0'

export async function fetchSites() {
    let categories = []
    let mainData = null
    let error = null

    try {
        const categoriesResponse = await getCategories()
        if (categoriesResponse.success) {
            categories = categoriesResponse.data
        } else {
        error = categoriesResponse.error
        }
    } catch (categoriesError) {
        error = categoriesError.message || 'Categories fetch failed';
    }

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

