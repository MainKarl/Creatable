import React, { useEffect } from 'react'
import { 
  Center,
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
          w={ '50%' }
          ml={ 'auto' }
          mr={ 'auto' }
          spacing={ 5 }>
            <Center w={ '100%' } h={ '100%' }>
              <IconButton 
                colorScheme={ 'orange' } 
                size={ 'sm' } 
                icon={ <ArrowLeftIcon /> }
                onClick={ _ => changePage(1, filteredItems) }
                m={ 2 } />
              <IconButton 
                colorScheme={ 'orange' } 
                size={ 'sm' } 
                icon={ <ChevronLeftIcon /> }
                onClick={ _ => changePage((pageFilter - 1), filteredItems) }
                m={ 2 } />
              <Text>Page { pageFilter } / {Math.ceil(filteredItems.length / itemsPerPage)}</Text>
              <IconButton 
                colorScheme={ 'orange' } 
                size={ 'sm' } 
                icon={ <ChevronRightIcon /> }
                onClick={ _ => changePage((pageFilter + 1), filteredItems) }
                m={ 2 } />
              <IconButton 
                colorScheme={ 'orange' } 
                size={ 'sm' } 
                icon={ <ArrowRightIcon /> }
                onClick={ _ => changePage(Math.ceil(filteredItems.length / itemsPerPage), filteredItems) }
                m={ 2 } />
            </Center>
        </HStack>
    )
}