import { getCategories, getMain} from '~/scripts/dev/apiBuilderV0'
// Fetch dei dati

const categoriesResponse = await getCategories()
const mainResponse = await getMain()

let categories = []
let mainData = null
let error = null

if (categoriesResponse.success) {
    categories = categoriesResponse.data
} else {
  error = categoriesResponse.error
}

if (mainResponse.success) {
  mainData = mainResponse.data;
} else {
  error = error || mainResponse.error
}

