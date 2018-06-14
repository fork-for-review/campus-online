import React from 'react'
import PropTypes from 'prop-types'
import Template from '.'

const Author = ({data: {markdownRemark}}) => {
	const {frontmatter, html} = markdownRemark || {frontmatter: {}, html: ''}
	return (
		<Template
			content={html}
			name={frontmatter.title}
			semester={frontmatter.semester}
			avatar={frontmatter.image}
		/>
	)
}

Author.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			html: PropTypes.string.isRequired,
			frontmatter: PropTypes.shape({
				title: PropTypes.string.isRequired,
				semester: PropTypes.string.isRequired,
				image: PropTypes.string,
			}).isRequired,
		}).isRequired,
	}).isRequired,
}

export default Author

export const pageQuery = graphql`
	query AuthorByID($id: String!) {
		markdownRemark(id: {eq: $id}) {
			html
			frontmatter {
				title
				semester
				image
			}
		}
	}
`
