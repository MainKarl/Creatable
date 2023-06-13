const getNameIfExists = (list, name, backup) => {
    const element = list.find(item => item.name === name)
    if (element === undefined)
        return backup
    return element
}

export const getSelectedElement = (list, nameList, elementName, elementBackup) => {
    const name = getNameIfExists(nameList, elementName, elementBackup)
    const element = list.find(item => item.id === name.value)
    if (element === undefined)
        return elementBackup
    return element.value
}

const returnString = (list) => {
    var string = ''
    list.map(element => {
        if (String(string).length === 0)
            string = element
        else
            string += ';'+element
    })
    return string
}

export const addElement = (list, value) => {
    var array = String(list).split(';')
    if (array.find(element => element === value) === undefined)
        array.push(String(value))
    return returnString(array)
}

export const removeElement = (list, value) => {
    return returnString(String(list).split(';').filter(item => item !== String(value)))
}
