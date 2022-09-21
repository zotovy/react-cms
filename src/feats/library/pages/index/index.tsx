import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Layout } from "@core/components/layout/layout";
import { DefaultHeader } from "@core/components/sections/headers/default/default";

export const IndexLibrary: React.FC = () => {
    return <Layout>
        <DefaultHeader 
            title="Component library"
            subtitle="Icons, styles, design annotations— everything you need to build the foundation of a great design system."/>
        
        <div className={ styles.indexPage }>
            {/* Buttons */}
            <Card
                title="Buttons"
                link="/apps/components/buttons"
                image="/images/previews/buttons.png"
                description="5 components + 940 variants"/>
        </div>
    </Layout>
}

type CardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = (props) => {
    return <Link to={ props.link } className={ styles.card }>
        <img src={ props.image } alt={ props.title } className={ styles.cardImage }/>
        <div className={ styles.cardContent }>
            <h4 className={ styles.cardTitle }>{ props.title }</h4>
            <p className={ styles.cardDescription }>{ props.description }</p>
        </div>
    </Link>
}