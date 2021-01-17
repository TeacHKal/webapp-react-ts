import React from "react";
import _ from 'lodash';
import './index.scss';
import {Button} from "../../baseComponents/button";

interface IData {
    text: string,
    type: string,
}

interface IProps {
    data: Array<IData>;
    onSelectionChange: (int: string) => void;
}

export const Selection: React.FC<IProps> = ({data, onSelectionChange}) => {
    const renderButtons = (data: any) => {
        return (
            _.map(data, (item: any, key: number) => {
                return (
                    <div className={'selection_btn-main'} key={key}>
                        <Button
                            text={item.text}
                            onClick={() => onSelectionChange(item.type)}
                            variant="contained"
                            color="primary"
                            key={key}
                            //size="small"
                        >
                        </Button>
                    </div>
                );
            }))
    };

    return (
        <div className={'selection_con'}>
            {renderButtons(data)}
        </div>
    )
};

