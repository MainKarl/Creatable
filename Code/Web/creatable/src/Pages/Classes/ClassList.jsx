import React, { useState, useEffect } from "react"
import { 
    useColorModeValue 
} from "@chakra-ui/react"

const ClassList = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [classesJson, setClassesJson] = useState([])
    const [classes, setClasses] = useState([])
    const [classSeries] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
            id: 1,
            value: 'Militia'
        },
        {
            id: 2,
            value: 'Fighter'
        },
        {
            id: 3,
            value: 'Skirmisher'
        },
        {
            id: 4,
            value: 'Bowman'
        },
        {
            id: 5,
            value: 'Medic'
        },
        {
            id: 6,
            value: 'Apprentice'
        },
        {
            id: 7,
            value: 'Monster'
        },
        {
            id: 8,
            value: 'Demon'
        },
        {
            id: 9,
            value: 'Beastman'
        },
        {
            id: 10,
            value: 'Drakeling'
        },
    ])
    const getClassSerieId = (value) => {
        switch (value) {
            case 'None':
                return 0
            case 'Militia':
                return 1
            case 'Fighter':
                return 2
            case 'Skirmisher':
                return 3
            case 'Bowman':
                return 4
            case 'Medic':
                return 5
            case 'Apprentice':
                return 6
            case 'Monster':
                return 7
            case 'Demon':
                return 8
            case 'Beastman':
                return 9
            case 'Drakeling':
                return 10
        }
    }
    const getClassSerieValue = (id) => {
        switch (id) {
            case 0:
                return 'None'
            case 1:
                return 'Militia'
            case 2:
                return 'Fighter'
            case 3:
                return 'Skirmisher'
            case 4:
                return 'Bowman'
            case 5:
                return 'Medic'
            case 6:
                return 'Apprentice'
            case 7:
                return 'Monster'
            case 8:
                return 'Beastman'
            case 9:
                return 'Drakeling'
        }
    }

    const [searchString, setSearchString] = useState('')
    const [filterClassSeries, setFilterClassSeries] = useState(0)
    const verifyClass = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            if (searchString !== '' && !String(item.predecessor).toUpperCase().includes(searchString.toUpperCase()))
                return false
        if (filterClassSeries !== 0 && item.class_serie !== getClassSerieValue(filterClassSeries))
            return false
        itemCounter++
        return true
    }
    const verifyFilterPC = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            if (searchString !== '' && !String(item.predecessor).toUpperCase().includes(searchString.toUpperCase()))
                return false
        if (filterClassSeries !== 0 && item.class_serie !== getClassSerieValue(filterClassSeries))
            return false
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 10 && itemCounter <= pageFilter * 10)
            return true
        return false
    }

    const [pageFilter, setPageFilter] = useState(1)
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 4)) {
            window.scrollTo(0, 0)
            setPageFilter(pageNumber)
        }
    }

    const orderBy = (a, b) => {
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1
        return 0
    }
    const getClass = () => {
        const obj = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }
        fetch(data.api_url+'class/get', obj).then(response => response.json().then(item => {
            setClassesJson(item.sort(orderBy))
        }))
    }

    useEffect(() => {
        setClasses(classesJson.filter(verifyClass))
    }, [pageFilter])
    useEffect(() => {
        setClasses(classesJson.filter(verifyClass))
    }, [classesJson])
    useEffect(() => {
        setPageFilter(1)
        resetItemCounter()
        getClass()
    }, [])

    return (
        <>
        </>
    )
}

export default ClassList