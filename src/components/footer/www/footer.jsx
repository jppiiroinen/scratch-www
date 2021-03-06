var React = require('react');
var FormattedMessage = require('react-intl').FormattedMessage;

var FooterBox = require('../container/footer.jsx');
var LanguageChooser = require('../../languagechooser/languagechooser.jsx');

require('./footer.scss');

var Footer = React.createClass({
    type: 'Footer',
    render: function () {
        return (
            <FooterBox>
                <div className="lists">
                    <dl>
                        <dt>
                            <FormattedMessage id='general.about' />
                        </dt>
                        <dd>
                            <a href="/about/">
                                <FormattedMessage id='general.aboutScratch' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/parents/">
                                <FormattedMessage id='general.forParents' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/educators/">
                                <FormattedMessage id='general.forEducators' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/developers">
                                <FormattedMessage id='general.forDevelopers' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/info/credits/">
                                <FormattedMessage id='general.credits' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/jobs/">
                                <FormattedMessage id='general.jobs' />
                            </a>
                        </dd>
                        <dd>
                            <a href="http://wiki.scratch.mit.edu/wiki/Scratch_Press">
                                <FormattedMessage id='general.press' />
                            </a>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <FormattedMessage id='general.community' />
                        </dt>
                        <dd>
                            <a href="/community_guidelines/">
                                <FormattedMessage id='general.guidelines' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/discuss/">
                                <FormattedMessage id='footer.discuss' />
                            </a>
                        </dd>
                        <dd>
                            <a href="https://wiki.scratch.mit.edu/">
                                <FormattedMessage id='general.wiki' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/statistics/">
                                <FormattedMessage id='general.statistics' />
                            </a>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <FormattedMessage id='general.support' />
                        </dt>
                        <dd>
                            <a href="/help/">
                                <FormattedMessage id='footer.help' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/info/faq/">
                                <FormattedMessage id='general.faq' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/scratch2download/">
                                <FormattedMessage id='general.offlineEditor' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/contact-us/">
                                <FormattedMessage id='general.contactUs' />
                            </a>
                        </dd>
                        <dd>
                            <a href="https://secure.donationpay.org/scratchfoundation/">
                                <FormattedMessage id='general.donate'/>
                            </a>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <FormattedMessage id='general.legal'/>
                        </dt>
                        <dd>
                            <a href="/terms_of_use/">
                                <FormattedMessage id='general.termsOfUse' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/privacy_policy/">
                                <FormattedMessage id='general.privacyPolicy' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/DMCA/">
                                <FormattedMessage id='general.dmca' />
                            </a>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <FormattedMessage id='footer.scratchFamily' />
                        </dt>
                        <dd>
                            <a href="http://scratched.gse.harvard.edu/">
                                <FormattedMessage id='general.scratchEd' />
                            </a>
                        </dd>
                        <dd>
                            <a href="http://www.scratchjr.org/">
                                <FormattedMessage id='general.scratchJr' />
                            </a>
                        </dd>
                        <dd>
                            <a href="http://day.scratch.mit.edu/">
                                <FormattedMessage id='general.scratchday' />
                            </a>
                        </dd>
                        <dd>
                            <a href="/conference/">
                                <FormattedMessage id='general.scratchConference' />
                            </a>
                        </dd>
                        <dd>
                            <a href="http://www.scratchfoundation.org/">
                                <FormattedMessage id='general.scratchFoundation' />
                            </a>
                        </dd>
                    </dl>
                </div>

                <LanguageChooser />

                <div className="copyright">
                    <p>
                        <FormattedMessage id='general.copyright' />
                    </p>
                </div>
            </FooterBox>
        );
    }
});

module.exports = Footer;
