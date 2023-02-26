import React from 'react';

function ShapeContainer({ color }) {
    const styles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1,
    };

    function Triangle() {
        const triangleStyle = {
            height: 0,
            width: 0,
            position: 'absolute',
            borderLeft: '50vw solid transparent',
            borderRight: '50vw solid transparent',
            borderTop: `130vh solid ${color}`,
            padding: '15%',
            marginLeft: '-15%',
        };

        return (
            <div style={triangleStyle}></div>
        );
    }

    return (
        <div className='shapeStyle' style={styles}>
            <Triangle />
        </div>
    );
}

export default ShapeContainer;
