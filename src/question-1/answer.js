// the return can contain duplicates, if the item appears 3+ times
export function findDuplicateItems1(data) {
    const knownItems = new Set()
    const duplicates = []
    data.forEach((item) => {
        if(!knownItems.has(item)) {
            knownItems.add(item)
        } else {
            duplicates.push(item)
        }
    })

    return duplicates
}

// the return has only unique items
export function findDuplicateItems2(data) {
    const knownItems = []
    const duplicates = []

    data.forEach((item) => {
        if(!knownItems.includes(item)) {
            knownItems.push(item)
        } else {
            duplicates.push(item)
        }
    })

    return Array.from(new Set(duplicates))
}