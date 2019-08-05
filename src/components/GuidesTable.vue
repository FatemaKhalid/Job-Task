<template>
    <section class="md-ui component-data-table">
	<!-- <header class="main-table-header">
		<h1 class="table-header--title">Nutrition</h1>
		<span class="table-header--icons"><i class="material-icons">filter_list</i><i class="material-icons">more_vert</i>
		</span>
	</header> -->
	<div class="main-table-wrapper">
		<table class="main-table-content">
			<thead class="data-table-header">
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Dessert (100g serving)</td>
					<td class="table-datacell datatype-numeric">Calories</td>
					<td class="table-datacell datatype-numeric">Fat (g)</td>
					<td class="table-datacell datatype-numeric">Carbs (g)</td>
					<td class="table-datacell datatype-numeric">Protein (g)</td>
					<td class="table-datacell datatype-numeric">Sodium (mg)</td>
					<td class="table-datacell datatype-numeric">Calcium (%)</td>
					<td class="table-datacell datatype-numeric">Iron (%)</td>
					<td class="table-datacell datatype-string"><i class="material-icons">insert_comment</i>Comments</td>
				</tr>
			</thead>
			<tbody class="data-table-content">
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Frozen yogurt</td>
					<td class="table-datacell datatype-numeric">159</td>
					<td class="table-datacell datatype-numeric">6.0</td>
					<td class="table-datacell datatype-numeric">24</td>
					<td class="table-datacell datatype-numeric">4.0</td>
					<td class="table-datacell datatype-numeric">87</td>
					<td class="table-datacell datatype-numeric">14%</td>
					<td class="table-datacell datatype-numeric">1%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Ice cream sandwich</td>
					<td class="table-datacell datatype-numeric">237</td>
					<td class="table-datacell datatype-numeric">9.0</td>
					<td class="table-datacell datatype-numeric">37</td>
					<td class="table-datacell datatype-numeric">4.3</td>
					<td class="table-datacell datatype-numeric">129</td>
					<td class="table-datacell datatype-numeric">8%</td>
					<td class="table-datacell datatype-numeric">1%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Eclair</td>
					<td class="table-datacell datatype-numeric">262</td>
					<td class="table-datacell datatype-numeric">16.0</td>
					<td class="table-datacell datatype-numeric">24</td>
					<td class="table-datacell datatype-numeric">6.0</td>
					<td class="table-datacell datatype-numeric">337</td>
					<td class="table-datacell datatype-numeric">6%</td>
					<td class="table-datacell datatype-numeric">7%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Cupcake</td>
					<td class="table-datacell datatype-numeric">305</td>
					<td class="table-datacell datatype-numeric">3.7</td>
					<td class="table-datacell datatype-numeric">67</td>
					<td class="table-datacell datatype-numeric">4.3</td>
					<td class="table-datacell datatype-numeric">413</td>
					<td class="table-datacell datatype-numeric">3%</td>
					<td class="table-datacell datatype-numeric">8%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Gingerbread</td>
					<td class="table-datacell datatype-numeric">356</td>
					<td class="table-datacell datatype-numeric">16.0</td>
					<td class="table-datacell datatype-numeric">49</td>
					<td class="table-datacell datatype-numeric">3.9</td>
					<td class="table-datacell datatype-numeric">327</td>
					<td class="table-datacell datatype-numeric">7%</td>
					<td class="table-datacell datatype-numeric">16%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Jellybean</td>
					<td class="table-datacell datatype-numeric">375</td>
					<td class="table-datacell datatype-numeric">0.0</td>
					<td class="table-datacell datatype-numeric">94</td>
					<td class="table-datacell datatype-numeric">0.0</td>
					<td class="table-datacell datatype-numeric">50</td>
					<td class="table-datacell datatype-numeric">0%</td>
					<td class="table-datacell datatype-numeric">0%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr>
					<td class="table-datacell datatype-string">Lollipop</td>
					<td class="table-datacell datatype-numeric">392</td>
					<td class="table-datacell datatype-numeric">0.2</td>
					<td class="table-datacell datatype-numeric">98</td>
					<td class="table-datacell datatype-numeric">0</td>
					<td class="table-datacell datatype-numeric">38</td>
					<td class="table-datacell datatype-numeric">0%</td>
					<td class="table-datacell datatype-numeric">2%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Honeycomb</td>
					<td class="table-datacell datatype-numeric">408</td>
					<td class="table-datacell datatype-numeric">3.2</td>
					<td class="table-datacell datatype-numeric">87</td>
					<td class="table-datacell datatype-numeric">6.5</td>
					<td class="table-datacell datatype-numeric">562</td>
					<td class="table-datacell datatype-numeric">0%</td>
					<td class="table-datacell datatype-numeric">45%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Donut</td>
					<td class="table-datacell datatype-numeric">452</td>
					<td class="table-datacell datatype-numeric">25.0</td>
					<td class="table-datacell datatype-numeric">51</td>
					<td class="table-datacell datatype-numeric">4.9</td>
					<td class="table-datacell datatype-numeric">326</td>
					<td class="table-datacell datatype-numeric">2%</td>
					<td class="table-datacell datatype-numeric">22%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">KitKat</td>
					<td class="table-datacell datatype-numeric">518</td>
					<td class="table-datacell datatype-numeric">26.0</td>
					<td class="table-datacell datatype-numeric">65</td>
					<td class="table-datacell datatype-numeric">7</td>
					<td class="table-datacell datatype-numeric">54</td>
					<td class="table-datacell datatype-numeric">12%</td>
					<td class="table-datacell datatype-numeric">6%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- <footer class="main-table-footer">
		<span class="rows-selection">
			<span class="rows-selection-label">Rows per page:</span>
			<span class="rows-selection-dropdown">10<i class="material-icons">arrow_drop_down</i></span>
		</span>
		<span class="rows-amount">1-10 of 100</span>
		<span class="table-pagination">
			<i class="material-icons">keyboard_arrow_left</i>
			<i class="material-icons">keyboard_arrow_right</i>
		</span>
	</footer> -->
</section>
</template>
<script>
export default {
    
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
	/* START - main table header */
	.main-table-header {
		padding: 24px 14px 24px 24px;
		.table-header--title {
			color: rgba(0,0,0,.87);	
			font-weight: 100;
			font-size: 20px;
			margin: 0;
			display: inline-block;
		}
		.table-header--icons {
			font-size: 24px;
			float: right;
			vertical-align: middle;
			.material-icons:first-child {
				padding-right: 24px;
			}
		}
	}
	/* END - main table header */
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
						color: rgba(0, 0, 0, .54);
						font-size: 12px;
						font-weight: 500;
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
	/* START main table footer */
	.main-table-footer {
		color: rgba(0,0,0,.54);
		font-size: 12px;
		text-align: right;
		padding: 22px 0;
		span {
			vertical-align: middle;
			.material-icons {
				font-size: 24px;
				vertical-align: middle;
				cursor: pointer;
			}
			&.rows-selection {
				padding-right: 32px;
				.rows-selection-label {
					padding-right: 38px;
				}
			}
			&.rows-amount {
				padding-right: 32px;
			}
			&.table-pagination {
				padding-right: 14px;
				.material-icons:first-child {
					padding-right: 24px;
				}
			}
		}
	}
	/* END main table footer */
}
</style>

