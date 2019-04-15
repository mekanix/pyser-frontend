import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import ResolutionContext from 'resolution'
import store from 'store'
import getStyles from './styles'


@observer
class PriceBox extends React.Component {
  handleClick = () => {
    const focused = this.props.name === store.cfs.focused
      ? ''
      : this.props.name
    store.cfs.focused = focused
  }

  render() {
    const styles = getStyles(this.props.backgroundColor, this.props.resolution)
    const rootStyle = this.props.name === store.cfs.focused
      ? styles.price.focused
      : styles.price
    return (
      <Paper style={rootStyle}>
        <Toolbar onClick={this.handleClick} style={styles.toolbar}>
          <div style={styles.title}>
            {this.props.price}
          </div>
          <div>
            {this.props.name}
          </div>
        </Toolbar>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </Paper>
    )
  }
}


PriceBox.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  resolution: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
}


export default (props) => (
  <ResolutionContext.Consumer>
    {resolution => <PriceBox {...props} resolution={resolution} />}
  </ResolutionContext.Consumer>
)
