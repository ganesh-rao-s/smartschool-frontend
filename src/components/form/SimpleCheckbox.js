import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class SimpleCheckbox extends React.Component {
    state = {
        checkedA: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { label } = this.props;
        return (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            value="checkedA"
                            color="primary"
                        />
                    }
                    label={label}
                />
        );
    }
}

export default SimpleCheckbox;
