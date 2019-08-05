<template>
    <section class="md-ui component-data-table">
	<div class="main-table-wrapper">
		<table class="main-table-content">
			<thead class="data-table-header">
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Name  <font-awesome-icon v-on:click="" icon="angle-down"/></td>
					<td class="table-datacell datatype-numeric">Number  <font-awesome-icon v-on:click="" icon="angle-down"/></td>
					<td class="table-datacell datatype-numeric">City  <font-awesome-icon v-on:click="" icon="angle-down"/></td>
					<td class="table-datacell datatype-numeric">Fees  <font-awesome-icon v-on:click="" icon="angle-down"/></td>
					<td class="table-datacell datatype-string"><i class="material-icons"></i>Languages</td>
					<td class="table-datacell datatype-numeric"></td>
				</tr>
			</thead>
			<tbody class="data-table-content">
				<tr v-for="guide in guides"  class="data-table-row">
					<td class="table-datacell datatype-string name-td">{{guide.name}}</td>
					<td class="table-datacell datatype-numeric">{{guide.number}}</td>
					<td class="table-datacell datatype-numeric">{{guide.City}}</td>
					<td class="table-datacell datatype-numeric">{{guide.Fees}}</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
					<td class="table-datacell datatype-numeric"><a>Archive</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
</template>
<script>
export default {
	name:'GuidesTable',
	data() {
		return{
				guides : [
					{
						name: 'Mohamed Hussien',
						number: '01052365248',
						City: 'Aswan',
						Fees: '10,000',
						Languages: ['English', 'French', 'Italian', 'Russian', 'Chinese'],
						archived: false,
					},{
						name: 'Mohamed Hussien',
						number: '01052365248',
						City: 'Aswan',
						Fees: '10,000',
						Languages: ['English', 'French', 'Italian', 'Russian', 'Chinese'],
						archived: true,
					},{
						name: 'Mohamed Hussien',
						number: '01052365248',
						City: 'Aswan',
						Fees: '10,000',
						Languages: ['English', 'French', 'Italian', 'Russian', 'Chinese'],
						archived: false,
					},
				]

		}
	}
}
</script>
<style lang="scss" scoped>

body {
	background: #f5f5f5;
	padding: 0;
	margin: 0;
}

.md-ui.component-data-table {
	background: #fff;
	border: 0;
	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	font-family: "Roboto", sans-serif;
	font-size: 13px;
	font-weight: 400;
	margin: 2em;
	width: auto;
	/* START - main table wrapper */
	.main-table-wrapper {
		display: block;    
        width: 95%;
        margin: 0 auto;
		overflow-x: auto;
		/* START data table content */
		.main-table-content {
			border-collapse: collapse;
			border-spacing: 0;
			width: 100%;
			overflow: hidden;
			tr {
				border-bottom: 1px solid #e0e0e0;
				td {
					text-overflow: ellipsis;
					padding: 0 56px 0 0;
					&:first-child {
						padding: 0 56px 0 24px;
					}
					&:last-child {
						padding: 0 24px 0 0;
					}
					&.datatype-string {
						text-align: left;
					}
					&.datatype-numeric {
						text-align: right;
					}
				}
			}
			/* START - data table header */
			.data-table-header {
				tr {
					height: 64px;
					padding: 0 24px;
					td {
						color: #000;
						font-size: 15px;
						font-weight: 900;
						vertical-align: middle;
						.material-icons {
							font-size: 18px;
							vertical-align: middle;
							padding-right: 8px;
						}
					}
				}
			}
			/* END - data table header */
			/* START - data table content */
			.data-table-content {
				tr {
					height: 48px;
					cursor: pointer;
					&:hover {
						background: #eee;
					}
					.name-td{
						font-weight: 600;
					}
					td {
						color: rgba(0, 0, 0, .87);
						font-weight: 500;
						input[type="text"] {
							background: transparent;
							border: 0;
							color: #212121;
							font-family: "Roboto", sans-serif;
							font-size: 13px;
							font-weight: 400;
							height: 40px;
							&::placeholder {
								color: rgba(0, 0, 0, .38);
							}
						}
					}
				}
			}
			/* END data table content */
		}
	}
	/* END main table wrapper */
	
}
</style>

