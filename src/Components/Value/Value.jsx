import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
    AccordionItemHeading,
} from 'react-accessible-accordion'
import data from '../../utils/accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

const Value = () => {
    return (
        <section id='value' className='v-wrapper'>
            <div className="paddngs innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better

                    </span>
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}>
                        {
                            data.map((item, index) => {
                                const [className, setClassName] = useState(null);
                                return (
                                    <AccordionItem className={`AccordionItem ${className}`} key={index} uuid={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className='primaryText'>{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                                            </AccordionItemButton>
                                            <AccordionItemState>
                                                {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
