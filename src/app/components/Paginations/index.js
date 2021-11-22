const React = require('react');
const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const Paginations = require('@trendmicro/react-paginations');
import('@trendmicro/react-paginations/dist/react-paginations.css');
const i18n = require('app/lib/i18n');

export const TablePagination = (props) => (
  <Paginations.TablePagination
    {...props}
    pageRecordsRenderer={({ totalRecords, from, to }) => {
      if (totalRecords > 0) {
        return i18n._('Records: {{from}} - {{to}} / {{total}}', {
          from,
          to,
          total: totalRecords,
        });
      }

      return i18n._('Records: {{total}}', { total: totalRecords });
    }}
    pageLengthRenderer={({ pageLength }) => (
      <span>
        {i18n._('{{pageLength}} per page', { pageLength })}
        <i className="caret" />
      </span>
    )}
  />
);
