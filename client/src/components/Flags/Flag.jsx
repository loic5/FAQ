import React from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'
import cn from 'classnames'

import { useIntl } from 'services'

const flagMeta = {
  duplicate: {
    icon: 'filter_2',
    color: '#AF1E3A'
  },
  outdated: {
    icon: 'history',
    color: '#586069'
  },
  incomplete: {
    icon: 'report',
    color: '#BC5820'
  },
  unanswered: {
    icon: 'help_outline',
    color: '#157B5F'
  }
}

const Flag = ({ flag, withlabel, style, ...otherProps }) => {
  const intl = useIntl(Flag)

  return (
    <div
      className={cn('flag', {
        'with-label': withlabel
      })}
      style={{ backgroundColor: flagMeta[flag.type].color, ...style }}
      {...otherProps}
    >
      <i className="material-icons">{flagMeta[flag.type].icon}</i>
      {withlabel && <span className="label">{capitalize(intl(flag.type))}</span>}
    </div>
  )
}

Flag.propTypes = {
  flag: PropTypes.object.isRequired,
  withlabel: PropTypes.bool,
  style: PropTypes.object
}

Flag.translations = {
  en: {
    duplicate: 'duplicate',
    outdated: 'outdated',
    incomplete: 'incomplete',
    unanswered: 'unanswered'
  },
  fr: {
    duplicate: 'doublon',
    outdated: 'obsolète',
    incomplete: 'incomplète',
    unanswered: 'sans réponse'
  }
}

export default Flag

export { flagMeta }
