import {getMain} from '~/scripts/requests'

export const recordLinks = await getMain()

console.log('data', recordLinks)

