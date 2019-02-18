import React                 from "react";
import Title                 from "./Title";
import {ContextConsumer}     from "../Context";
import styled                from 'styled-components';
import LayoutText            from "./LayoutText";

export default function Privacy()  {
	
    return (
	    <ContextConsumer >
		   {(value ) => {
			
			let name        = "privacy";
			let titleInfo   = value.topics.privacy;
		    return (
				<DivPrivacy className="mt-0 mb-0 pb-5">
					<Title name     = {titleInfo.title}
						   subtitle = {titleInfo.subtitle}
						   icon     = {titleInfo.icon}
					/>
					<LayoutText value = {value} 
					            name  = {name} />		
				</DivPrivacy>
				)
			}
		   }
		</ContextConsumer>

    );
}


const DivPrivacy = styled.div`
	text-align: justify;
	p {
		font-size: var(--fontSizeSm) !important;
	}
` 
