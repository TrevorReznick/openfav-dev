/*
import Layout from '~/layouts/PageLayout.astro'

import Hero from '~/components/widgets/Hero.astro'
import CallToAction from '~/components/widgets/CallToAction.astro'

import Features2 from '~/components/main/Features2.astro'
import Features from '~/components/widgets/Features.astro'
import Stats from '~/components/widgets/Stats.astro'
import Features3 from '~/components/widgets/Features3.astro'
import FAQs from '~/components/widgets/FAQs.astro'
import Brands from '~/components/widgets/Brands.astro'
*/

import { getCategories, getItem, getMain, getLists } from '~/scripts/requests'
import { numElements, mapItem } from '~/scripts/oopps'

const metadata = {
  title: 'OpenFav Dashboard',
}

/* fetch db */

const categories = await getCategories()
const mainData = await getMain()
const lists = await getLists()

/* map results */

const areas = mapItem(categories, 'area')

/* get num items */

const numSites = numElements(mainData)
const numAreas = numElements(areas)
const numLists = numElements(lists)
