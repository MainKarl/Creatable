import React, { useEffect } from 'react'
import { 
    HStack,
    IconButton,
    Text
} from '@chakra-ui/react'
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon
} from '@chakra-ui/icons'

export function PageChanger({ changePage, filteredItems, pageFilter, itemsPerPage }) {
    return (
        <HStack
          w={ '20%' }
          ml={ 'auto' }
          mr={ 'auto' }
          spacing={ 5 }>
            <IconButton 
              colorScheme={ 'orange' } 
              size={ 'sm' } 
              icon={ <ArrowLeftIcon /> }
              onClick={ _ => changePage(1, filteredItems) } />
            <IconButton 
              colorScheme={ 'orange' } 
              size={ 'sm' } 
              icon={ <ChevronLeftIcon /> }
              onClick={ _ => changePage((pageFilter - 1), filteredItems) } />
            <Text>Page { pageFilter } / {Math.ceil(filteredItems.length / itemsPerPage)}</Text>
            <IconButton 
              colorScheme={ 'orange' } 
              size={ 'sm' } 
              icon={ <ChevronRightIcon /> }
              onClick={ _ => changePage((pageFilter + 1), filteredItems) } />
            <IconButton 
              colorScheme={ 'orange' } 
              size={ 'sm' } 
              icon={ <ArrowRightIcon /> }
              onClick={ _ => changePage(Math.ceil(filteredItems.length / itemsPerPage), filteredItems) } />
        </HStack>
    )
}