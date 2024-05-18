import React, { useState, useEffect } from 'react'; 
import {  Tag, Space, Image, Row, Col, Spin, Empty} from 'antd'; 
import plantData from '../../api/api.json'; 
import styled from 'styled-components'; 
import { useInView } from 'react-intersection-observer'; 
import CardFlover from '../Card'; 
import { IFlover } from '../Card/types'; 


export const BlockObserver = styled.div` 
  visibility: hidden; 
  height: 40px; 
  background-color: black; 
`; 

const itemsPerPage = 8; 


function DinamicPagination() { 


  const [currentPage, setCurrentPage] = useState(1); 
  const [isLoading, setIsLoading ] = useState(false); 
  const [displayedData, setDisplayedData] = useState<IFlover[]>([]); 
  console.log(isLoading)
  console.log(displayedData.length)

  useEffect(() => { 
    setIsLoading(true) 
    const offset = (currentPage - 1) * itemsPerPage; 
    const newData = plantData.slice(offset, offset + itemsPerPage); 
    setDisplayedData(prev => [...prev,...newData]); 
    setIsLoading(false) 
  }, [currentPage]); 

  const { ref, inView } = useInView({ 
    threshold: 0.5, 
}); 

useEffect(() => { 
      if (inView) { 
          setCurrentPage((prev) => prev + 1) 
      } 
  }, [inView]); 

  return (  
    <div className='container'> 
      <h1>Flowers</h1>
      <Spin spinning={isLoading} fullscreen />  
          {
            displayedData.length > 0 ?
            <Row align="top" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 2]}>  
            {displayedData.map((el,i) =><Col key={i} xs={6} > <CardFlover flover={el} /></Col>)}  
          </Row>
          :
          <Empty/>  
          }
        
      {!isLoading && <BlockObserver data-testid="observer" ref={ref}></BlockObserver>}  
    </div>  
); 

} 

export default DinamicPagination;