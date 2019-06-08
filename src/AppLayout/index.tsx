import * as React from 'react';

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const AppLayout = () => {
    

    return(
        <LayoutComponent>            
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <h1>
                Hello World
            </h1>
            </Grid>            
        </Grid>
        </LayoutComponent>
    )
}

const LayoutComponent = styled.div`
    overflow-x: hidden;
`;

export default AppLayout