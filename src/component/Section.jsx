
import React, { useState } from 'react';
import iconHamburger from '../assets/icon-hamburger.png';
import Item from './Item';
import classes from './Section.module.css'
import iconEdit from '../assets/icon-edit.png'
import { DragDropContext ,Droppable , Draggable } from 'react-beautiful-dnd';
import Footer from './Footer';

export default function Section(props) {
    const [isummary, setsummary] = useState(props.summary);
  
    const handleOnDragEnd = (result) => {
      if (!result.destination) {
        return;
      }
  
      const items = Array.from(isummary);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      setsummary(items);
    };
  
    return (
      <>
        <h2>Select your Section</h2>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="isummary">
            {(provided) => (
              <ul className={classes['whole-conatiner']}
                style={{ listStyleType: 'none' }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {isummary.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <li
                        className={classes.list}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Item item={item} index={index}/>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <button className={classes.button}>Submit and Next</button>
        <Footer/>
      </>
    );
  }

