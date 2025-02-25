export default function Option ({valueArray}) {
    let objectEl = valueArray.map(({name, value}) => (
        <option key={value} value={value}>{name ? name : value}</option>    
    ))

    return objectEl
}