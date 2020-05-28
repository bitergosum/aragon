import React from 'react'
import {
  GU,
  useLayout,
  Field,
  Link,
  IdentityBadge,
  TransactionBadge,
} from '@aragon/ui'
import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
function InfoField({ label, children, ...props }) {
  return (
    <Field
      label={label}
      {...props}
      css={`
        margin-bottom: 0;
      `}
    >
      {({ id }) => <React.Fragment>{children}</React.Fragment>}
    </Field>
  )
}
/* eslint-enable react/prop-types */

function AgreementDetails({ IPFSLink, AuthorHash, StakingHash, ContractHash }) {
  const { layoutName } = useLayout()

  return (
    <div
      css={`
        display: grid;
        grid-gap: ${layoutName === 'small' ? GU * 3 : GU * 4}px;
        grid-template-columns: ${layoutName === 'small'
          ? '1fr'
          : '1fr 1fr 1fr'};
      `}
    >
      <InfoField
        label="Agreement IPFS Link"
        css={`
          ${(layoutName === 'medium' || layoutName === 'large') &&
            'grid-column: span 2;'};
        `}
      >
        <Link
          href=""
          css={`
            max-width: 90%;
          `}
        >
          <span
            css={`
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
            `}
          >
            {IPFSLink}
          </span>
        </Link>
      </InfoField>
      <InfoField label="Created by">
        <IdentityBadge customLabel="Wesley Crusher" entity={AuthorHash} />
      </InfoField>
      <InfoField label="Arbitrator">Aragon Court</InfoField>
      <InfoField label="Staking Pool">
        <TransactionBadge transaction={StakingHash} />
      </InfoField>
      <InfoField label="Agreement Contract">
        <TransactionBadge transaction={ContractHash} />
      </InfoField>
    </div>
  )
}

AgreementDetails.propTypes = {
  IPFSLink: PropTypes.string,
  AuthorHash: PropTypes.string,
  StakingHash: PropTypes.string,
  ContractHash: PropTypes.string,
}

export default AgreementDetails
