import React from "react";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
import { connect } from "react-redux";
import { humanizeSeconds } from "../utils/index";
import { getAllExercises } from "../redux/selectors";
import { removeExercise } from "../redux/actions";
import styles from "./exercisetable.module.scss";

class ExerciseTable extends React.Component {
  columns = [
    {
      name: "Time",
      selector: "seconds",
      sortable: true,
      cell: ({ seconds }) => {
        return <span> {humanizeSeconds(seconds)}</span>;
      },
    },
    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Date",
      selector: "date",
      sortable: true,
      cell: ({ date }, i) => {
        return <span>{format(new Date(date), "dd/MM/yyyy")}</span>;
      },
    },
    {
      button: true,
      cell: ({ id }) => {
        return (
          <button
            className={styles.removeExerciseButton}
            onClick={() => {
              window.confirm("Are you sure you wish to delete this item?") &&
                this.props.removeExercise(id);
            }}
          >
            Delete
          </button>
        );
      },
    },
  ];

  render() {
    let totalExerciseSeconds = this.props.exercises.reduce((acc, exercise) => {
      return exercise.seconds + acc;
    }, 0);

    let humanizedSeconds = humanizeSeconds(totalExerciseSeconds);

    const header = (
      <section className={styles.headerContainer}>
        <h2 className={styles.headingPrincipal}>Exercise History</h2>
        <h3 className={styles.headingSecondary}>
          {humanizedSeconds} of exercises
        </h3>
      </section>
    );

    return (
      <section data-testid="exercise-table">
        {header}
        <DataTable
          noHeader={true}
          columns={this.columns}
          data={this.props.exercises}
          defaultSortField="date"
          pagination={true}
        />
      </section>
    );
  }
}

ExerciseTable.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      seconds: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      date: PropTypes.PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  ).isRequired,
};

ExerciseTable.defaultProps = {
  exercises: [],
};

const mapStateToProps = (state) => {
  const exercises = getAllExercises(state);
  return { exercises };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeExercise: (id) => {
      dispatch(removeExercise(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTable);
