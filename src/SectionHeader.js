
import React from 'react'
import HeadingLink from './HeadingLink'
import Text from './Text'
import theme from './theme'

/**
 * Header for section elements
 */

const SectionHeader = ({ heading, href, description, style, children, ...props }, { rebass }) => {

  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.SectionHeader : {}
  const { scale, borderColor } = config

  return (
    <header className='SectionHeader'
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: scale[1],
        marginTop: scale[3],
        marginBottom: scale[3],
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
        ...customStyle,
        ...style
      }}>
      <div style={{
          flex: '1 1 auto'
        }}>
        <HeadingLink href={href || `#${heading || ''}`} children={heading} />
        {description &&
          <Text children={description} />
        }
      </div>
      {children}
    </header>
  )
}

SectionHeader.propTypes = {
  /** Section heading */
  heading: React.PropTypes.string,
  /** Link to section, used in HeadingLink */
  href: React.PropTypes.string,
  /** Description of section */
  description: React.PropTypes.string,
}

SectionHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default SectionHeader
