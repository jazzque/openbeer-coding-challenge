source 'https://rubygems.org'

gem 'rails', '4.2.6'

gem 'sinatra', '>= 1.3.0', require: false
gem 'mysql2', '~> 0.3.13'
gem 'pg'
gem 'postgres_ext'

gem 'enumerize'
gem 'inherited_resources', git: 'https://github.com/activeby/inherited_resources.git'
gem 'responders'
gem 'will_paginate', github: 'Galathius/will_paginate'
gem 'simple_form'
gem 'carrierwave'
gem 'mini_magick'
gem 'haml-rails'
gem 'slim-rails'
gem 'seedbank'
gem 'devise'
gem 'devise-i18n'
gem 'devise-async'
gem 'devise_security_extension', github: 'phatworx/devise_security_extension'
gem 'cancan', github: 'randaalex/cancan', branch: 'fix_inhereted_res_with_custom_controller_name'
gem 'keepass-password-generator'
gem 'password_strength'
gem 'rails-i18n'
gem 'i18n-js'
gem 'sidekiq'
gem 'sidekiq-cron'
gem 'sidekiq-unique-jobs'
gem 'state_machines-activerecord'
gem 'state_machines-activemodel-observers'
gem 'cocaine'
gem 'settingslogic'
gem 'draper'
gem 'ancestry'
gem 'multi_xml'
gem 'multi_json'
gem 'wicked'
gem 'datagrid'
gem 'nokogiri'
gem 'jbuilder'
gem 'ox'
gem 'oj'
gem 'nested_form'
gem 'simple-navigation', '~> 3.13.0'
gem 'chronic_duration'
gem 'rails-observers'
gem 'net-ldap'

# redis extensions
gem 'readthis'
gem 'hiredis'

# used only in rake and tests, require explicitly if needed
gem 'ffaker', require: false

gem 'ar_after_transaction'
gem 'grape', '~> 0.10.1'
gem 'grape-entity', '0.4.8'
gem 'grape-swagger', '0.10.2'
gem 'unicode'
gem 'liquid'
gem 'parslet'
gem 'country_select'
gem 'countries'
gem 'phone'
gem 'simpleidn'
gem 'arel-helpers'

gem 'faraday', github: 'lostisland/faraday'
gem 'faraday_middleware'
gem 'typhoeus'

gem 'russian'
# Change to master branch after merge https://github.com/julik/ru_propisju/pull/18
gem 'ru_propisju', github: 'Galathius/ru_propisju'

gem 'virtus'

gem 'wkhtmltopdf'
gem 'pdfkit'

gem 'searchkick'
gem 'request_store'

# SMTP NTLM Client
# NTLM authentication is used in Microsoft's server products, such as MS Exchange Server and IIS.
gem 'ruby-ntlm'

# Rails console enhancements
gem 'awesome_print'
gem 'pry-rails'
gem 'pry-byebug'

group :development do
  gem 'web-console', '~> 3.0'
end

group :test, :development do
  gem 'gitlab'

  gem 'timecop'
  gem 'quiet_assets'
  gem 'capybara-angular'
  gem 'thin'
end

group :test, :automation do
  gem 'simplecov', require: false
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'poltergeist'
  gem 'rspec-rails'
  gem 'rspec-its'
  gem 'rspec-collection_matchers'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-html-matchers'
  gem 'database_cleaner'
  gem 'shoulda-matchers', '~> 2.8.0', require: false
  gem 'factory_girl_rails'
  gem 'fuubar', require: false
  gem 'sqlite3'
  gem 'selenium-webdriver'
  gem 'webmock', require: false
  gem 'vcr', require: false

  gem 'pronto', require: false
  gem 'pronto-rubocop', require: false
  gem 'pronto-fasterer', require: false
  gem 'pronto-reek', require: false
  gem 'pronto-haml', require: false
  gem 'pronto-scss', require: false
  gem 'pronto-coffeelint', require: false
  gem 'pronto-jshint', require: false, github: 'Galathius/pronto-jshint'

  gem 'parallel_tests'
end

group :production, :master do
  gem 'airbrake', '4.3.3'
end

# C extension for fast .blank? method
gem 'fast_blank'

gem 'whois', github: 'activeby/whois', branch: 'master-3.x', require: false # https://github.com/weppos/whois/pull/527
gem 'spreadsheet'
gem 'libxml-ruby'
gem 'stringex'
gem 'roo', '~> 2.4.0'

# Assets
gem 'chosen-rails'
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'jquery-rails'
gem 'angularjs-rails', '1.4.8'
gem 'angular-rails-templates'
gem 'ng-rails-csrf'
gem 'jquery-ui-rails', '~> 4.0'
gem 'js-routes'
gem 'sprockets', '~> 3.0'
gem 'sprockets-rails', '2.3.3'
gem 'sprockets-es6'

source 'https://rails-assets.org' do
  gem 'rails-assets-angular', '1.4.8'
  gem 'rails-assets-codemirror'
  gem 'rails-assets-ngDialog'
  gem 'rails-assets-ngUpload'
  gem 'rails-assets-ng-table', '~> 0.3.0'
  gem 'rails-assets-angular-perfect-scrollbar', '0.0.3'
  gem 'rails-assets-bootstrap-datepicker', '~> 1.3.0'
  gem 'rails-assets-jquery.cookie'
  gem 'rails-assets-ajax-chosen'
  gem 'rails-assets-angular-poller'
  gem 'rails-assets-lodash'
  gem 'rails-assets-angular-flash-messages'
  gem 'rails-assets-angular-paging'
  gem 'rails-assets-angular-http-case-converter'
  gem 'rails-assets-angular-toastr' # popup notifications
  gem 'rails-assets-angular-checklist-model'
  gem 'rails-assets-angular-chartjs', '~> 0.10.2'
  gem 'rails-assets-momentjs'
  gem 'rails-assets-wenzhixin--multiple-select'
end

# Plugins gems

gem 'wash_out', github: 'inossidabile/wash_out', tag: 'v0.9.2' # soap service provider
gem 'savon' # soap client
gem 'offsite_payments' # Payment methods integration
gem 'opensrs'
gem 'rubyntlm' # For httpi integration with net_http adapter (for Savon with ntlm authetication)
gem 'csr' # For generation csr.
gem 'rubyzip', '>= 1.0.0'
gem 'net-sftp', require: false
