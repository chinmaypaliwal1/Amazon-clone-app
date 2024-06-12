import React from 'react';
import './Home.css';

function Alert({ alert }) {
    const capitalize = (word) => {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
    };

    return (
        <>  
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <div className='alert' >
                        <p>{capitalize(alert.type)}</p>: {alert.msg}
                    </div>
                </div>
                
            )}
               </>
    );
}

export default Alert;

