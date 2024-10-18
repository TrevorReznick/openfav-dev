import * as R from 'ramda'

export function numElements (x: any) {    
    const t = R.length(x)    
    return t 
}

export function mapItem (x: any, y: string) { // map y over x example 
    const t = R.pipe(
        R.pluck(y),
        R.uniq
    )(x)
    return t
}
